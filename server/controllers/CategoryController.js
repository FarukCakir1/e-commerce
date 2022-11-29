const { insert, getData, deleteCategory } = require("../services/CategoryService")
const httpStatus = require("http-status")





const create = (req, res) => {

    insert(req.body)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}


const read = (req, res) => {
    getData()
     .then(response => res.status(httpStatus.OK).send(response))
     .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

const remove = (req,res) => {
    deleteCategory(req.params.id)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}


module.exports = {
    create,
    read,
    remove
}