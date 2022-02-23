const express = require("express");

const router = express.Router();
const control = require("../controller/product.ctrl");

router.get("/add-product", control.addProductPage);
router.post("/add-product",control.addProductPost);
router.get("/product-list",control.productList);
router.get("/edit-product/:productId",control.editProduct);
router.post("/edit-product",control.updateProduct);
router.get('/delete-product/:id',control.deleteProduct);
// router.post("/login", control.adminLoginPost);

// router.get("/dashboard",auth.isAuth,adminController.adminDashBoard);

module.exports = router;