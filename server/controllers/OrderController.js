const { insert, getData, modify } = require("../services/OrderService")
const httpStatus = require("http-status")

const create = (req, res) => {

    insert(req.body)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: err}))
}


const read = (req, res) => {
    if(req.query.customer_id){
        getData({"customer_id": req.query.customer_id})
            .then(response => res.status(httpStatus.OK).send(response))
            .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: err}))
        
        
        return
    }

    getData()
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: err}))
}

const updateStatus = (req, res) => {
    console.log(req.query._id)
    modify(req.query._id, req.body.status)
        .then(response => res.status(httpStatus.OK).send(response))
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: err}))
}

module.exports = {
    create,
    read,
    updateStatus
}

