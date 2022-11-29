const mongoose = require("mongoose")


const schema = new mongoose.Schema(
    {
        full_name: String,
        e_mail: String,
        password: String,
        favorites: Array,
        phone_number: String
    },
    {
        versionKey: false,
        timestamps: true
    }
)


const userModel = mongoose.model("user", schema)

module.exports = userModel;