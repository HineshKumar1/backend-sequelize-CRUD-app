const express = require("express")
const router = express.Router()
const reviewControlller = require("../controllers/review")

router.post("/",reviewControlller.addReview);
router.get("/",reviewControlller.getAllReview);

module.exports = router