const userModel = require("../models/UserModels")


const insert = (data) => {
    const newUser = new userModel(data)

    return newUser.save()
}

const getData = () => {
    return userModel.find({})
}

const userLogin = (userData) => {
    return userModel.findOne(userData)
}

const modifyFavorite = (_id, product) => {
    return userModel.findByIdAndUpdate(_id, {$push: {favorites: product}}, {new: true})
}

const removeItemInFavorites = (_id, product) => {
    return userModel.findByIdAndUpdate(_id, {$pull: {favorites: product}}, {new: true})
}

module.exports = {
    insert,
    getData,
    userLogin,
    modifyFavorite,
    removeItemInFavorites
}