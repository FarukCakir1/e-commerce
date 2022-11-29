const mongoose = require("mongoose");


const schema = new mongoose.Schema(
    {
        name: String,
    },
    {
        versionKey:false,
        timestamps: true
    }
    
)


const categoryModel = mongoose.model("category", schema)


module.exports = categoryModel