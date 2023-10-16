const productController = require("../controllers/product")
const express = require("express")
const router = express.Router();

router.post("/",productController.addProduct);
router.get("/",productController.getAllProducts)
router.put("/",productController.updateProduct);
router.delete("/",productController.deleteProduct)

module.exports = router