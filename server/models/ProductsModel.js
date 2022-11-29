const mongoose = require("mongoose");


const schema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        quantity: Number,
        product_image: String,
        desc: String,
        measure: mongoose.Schema.Types.Mixed,
        category: mongoose.Schema.Types.ObjectId,
        material: String,
        badgeType: String
        
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const productModel = mongoose.model("product", schema)


module.exports = productModel;