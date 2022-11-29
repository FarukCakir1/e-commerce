const express = require("express")

const router = express.Router()

const { create, read, login, remove } = require("../controllers/AdminController")
const { authenticateAdmin } = require("../middlewares/authenticate")


router.route("/").get(authenticateAdmin, read)
router.post("/", create)
router.post("/login", login)
router.delete("/:id", remove)



module.exports = router