const express = require("express")

const router = express.Router()

const {authenticateUser} = require("../middlewares/authenticate")
const { read, create, login, updateFavoriteList, removeFavorite } = require("../controllers/UserController")


router.get("/", read)
router.post("/", create)
router.post("/login", login)
router.route("/favorites/:id").post(authenticateUser, updateFavoriteList)
router.route("/favorites-remove/:id").post(authenticateUser, removeFavorite)

module.exports = router;