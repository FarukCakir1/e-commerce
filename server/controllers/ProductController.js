const { insert, getData, modify, deleteItem, updateProduct } = require("../services/ProductService");
const path = require("path");
const httpStatus = require("http-status");

const create = (req, res) => {
    const folderPath = path.join(__dirname, "../", "uploads/products", req.files.product_image.name)
    req.files.product_image.mv(folderPath)

    insert({...req.body, product_image: "http://localhost:3000/uploads/products/" + req.files.product_image.name})
        .then(response => {
            response = {
                ...response.toObject(),
            }
            res.status(200).send(response)
        })
        .catch(err => res.send(err))
}

const read = (req, res) => {
    getData()
    .then(response => res.status(200).send(response))
    .catch(err => res.send(err))
}

const newOrder = (req, res) => {
    req.body.map(prd => {
        modify(prd._id, prd.quantity, prd.orderQuantity).then(response => console.log(response))
    })
}

const remove = (req, res) => {
    const {id} = req.params
    deleteItem(id)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.NOT_FOUND).send(err))
}

const update = (req, res) => {
    if(req.files){
        const folderPath = path.join(__dirname, "../", "uploads/products", req.files.product_image.name)
        req.files.product_image.mv(folderPath)

        updateProduct(req.body._id, {...req.body, product_image: "http://localhost:3000/uploads/products/" + req.files.product_image.name})
            .then(response => {
                response = {
                    ...response.toObject(),
                }
                console.log(response)
                res.status(httpStatus.OK).send(response)
            })
            .catch(err => res.status(httpStatus.NOT_FOUND).send(err))
    }else{
        updateProduct(req.body._id, req.body)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.NOT_FOUND).send(err))
    }
    
    
}


module.exports = {
    create,
    read,
    newOrder,
    remove,
    update
}