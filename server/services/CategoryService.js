const categoryModel = require("../models/CategoryModel")


const insert = (data) => {
    const newCategory = new categoryModel(data)

    return newCategory.save()
}


const getData = () => {
    return categoryModel.find({})
}

const deleteCategory = (_id) => {
    return categoryModel.findByIdAndDelete(_id)
}


module.exports = {
    insert,
    getData,
    deleteCategory
}