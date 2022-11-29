const express = require("express")

const router = express.Router();

const {create, read, updateStatus} = require("../controllers/OrderController");
const { authenticateUser, authenticateAdmin } = require("../middlewares/authenticate");


router.get("/", read)
router.route("/user-orders").get(authenticateUser, read)
router.post("/", create)
router.route("/update-status").post(authenticateAdmin, updateStatus)


module.exports = router