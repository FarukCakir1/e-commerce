const mongoose = require("mongoose")

const schema = new mongoose.Schema(
    {
        admin_name: String,
        admin_password: String

    },
    {
        versionKey: false,
    }
)


const adminModel = mongoose.model("admin", schema)

module.exports = adminModel;