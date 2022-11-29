const orderModel = require("../models/OrderModel")


const insert = (data) => {
    const newOrder = new orderModel(data)
    return newOrder.save()
}

const getData = (filter) => {
    return orderModel.find(filter || {})
}

const modify = (_id, status) => {
    return orderModel.findByIdAndUpdate(_id, {status: status}, {new: true})
}


module.exports = {
    insert,
    getData,
    modify
}