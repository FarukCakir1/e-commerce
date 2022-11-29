const { insert, getData, userLogin, modifyFavorite, removeItemInFavorites } = require("../services/UserService")
const OrderService = require("../services/OrderService")
const { cryptedToPassword, createAccessToken, createRefreshToken } = require("../utils/Helpers")
const httpStatus = require("http-status")

const create = (req, res) => {
    req.body.password = cryptedToPassword(req.body.password)

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
    req.body.password = cryptedToPassword(req.body.password)
    userLogin(req.body)
        .then(user => {
            user = {
                ...user.toObject(),
                tokens: {
                    access_token: createAccessToken(user),
                    refresh_token: createRefreshToken(user)
                }
            }
            delete user.password
            res.status(httpStatus.OK).send(user)
        })
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

const updateFavoriteList = (req, res) => {
    modifyFavorite(req.params.id, req.body)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: err}))
}


const removeFavorite = (req, res) => {
    removeItemInFavorites(req.params.id, req.body)
        .then(response => res.status(httpStatus.OK).send({message: response}))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({error: err}))
}

module.exports = {
    create,
    read,
    login,
    updateFavoriteList,
    removeFavorite
}