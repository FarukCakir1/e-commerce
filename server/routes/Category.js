const express = require("express")
const router = express.Router()
const {create , read, remove} = require("../controllers/CategoryController")



router.get("/", read)
router.post("/", create)
router.post("/:id", remove)


module.exports = router

