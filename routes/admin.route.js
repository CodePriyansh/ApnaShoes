const express = require("express");

const router = express.Router();
const control = require("../controller/admin.ctrl");

// router.get('/home',control.adminHomePage);
router.get("/", control.adminLoginPage);
router.post("/login", control.adminLoginPost);

// router.get("/dashboard",auth.isAuth,adminController.adminDashBoard);

module.exports = router;
