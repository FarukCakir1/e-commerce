const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        customer_id: mongoose.Types.ObjectId,
        city: String,
        district: String,
        neighbour: String,
        fullAddress:String,
        phone:String,
        products: Array,
        status: String
    },
    {
        versionKey:false,
        timestamps:true
    }
)


const orderModel = mongoose.model("order", schema)


module.exports = orderModel