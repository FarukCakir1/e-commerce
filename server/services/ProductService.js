const productModel = require("../models/ProductsModel")


const insert = (data) => {
    const newProduct = new productModel(data)

    return newProduct.save()
}

const getData = () => {
    return productModel.find({})
}

const modify = (id, Quantity, orderQuantity) => {
    const newQuantity = Quantity - orderQuantity
    return productModel.findByIdAndUpdate(id, {quantity: newQuantity}, {new: true})
}

const deleteItem = (id) => {
    return productModel.findByIdAndDelete(id)
}

const updateProduct = (id, updatedProd) => {
    return productModel.findByIdAndUpdate(id, updatedProd)
}


module.exports = {
    insert,
    getData,
    modify,
    deleteItem,
    updateProduct
}