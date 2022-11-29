const { insert, getData, loginAdmin, deleteAdmin } = require("../services/AdminService")
const httpStatus = require("http-status")
const { cryptedToPassword, createAdminAccessToken, createAdminRefreshToken } = require("../utils/Helpers")

const create = (req, res) => {
    req.body.admin_password = cryptedToPassword(req.body.admin_password)
    insert(req.body)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
}

const read = (req, res) => {
    getData()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err))
}

const login = (req, res) => {
    req.body.admin_password = cryptedToPassword(req.body.admin_password)
    loginAdmin(req.body)
        .then(admin => {
            if (!admin) {
                res.status(httpStatus.NOT_FOUND).send({message: "Kullanıcı Bulunamadı.."})
                return;
            }
            admin = {
                ...admin.toObject(),
                tokens: {
                    access_token: createAdminAccessToken(admin),
                    refresh_token: createAdminRefreshToken(admin)
                }
            }
            delete admin.admin_password
            console.log(admin);
            res.status(httpStatus.OK).send(admin)
        })
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
   
}

const remove = (req, res) => {
    deleteAdmin(req.params.id)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

module.exports = {
    create,
    read,
    login,
    remove
}