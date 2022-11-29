const express = require("express");


const router = express.Router()

const {read, create, newOrder, remove, update} = require("../controllers/ProductController");

router.route("/").get(read)
router.post("/", create)
router.post("/order", newOrder)
router.post("/update", update)
router.delete("/:id", remove)

module.exports = router;