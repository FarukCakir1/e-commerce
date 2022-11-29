const mongoose = require("mongoose");

const db = mongoose.connection

db.once("open", () => {
    console.log("db connection success")
})

const connectDB = async () => {
    await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
}

module.exports = {
    connectDB
}