const adminModel = require("../models/AdminModel")


const insert = (data) => {
    const newAdmin = new adminModel(data)

    return newAdmin.save();
}

const getData = () => {
    return adminModel.find({})
}

const loginAdmin = (loginData) => {
    return adminModel.findOne(loginData)
}

const deleteAdmin = (id) => {
    return adminModel.findByIdAndDelete(id, {new: true})
}


module.exports = {
    insert,
    getData,
    loginAdmin,
    deleteAdmin
}