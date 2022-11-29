const express = require("express");
const fileUpload = require("express-fileupload")
const cors = require("cors")
const config = require("./config")
const loaders = require("./loaders")
const app = express();
const path = require("path")

const { ProductRoutes, UserRoutes, AdminRoutes, CategoryRoutes, OrderRoutes } = require("./routes/index")
config();
loaders();
app.use("/uploads", express.static(path.join(__dirname , "./", "uploads")))
app.use(express.json());
app.use(cors());
app.use(fileUpload())

app.listen(process.env.APP_PORT, () => {
    console.log(`server started at port ${process.env.APP_PORT}`)
    app.use("/product", ProductRoutes)
    app.use("/users", UserRoutes)
    app.use("/admins", AdminRoutes)
    app.use("/categories", CategoryRoutes)
    app.use("/orders", OrderRoutes)
})