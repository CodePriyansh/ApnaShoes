const express = require('express');
const auth = require('../middleware/auth');
const userController = require('../controller/user.controller');
const router = express.Router();

router.get("/home",userController.userHomePage);

router.get("/",userController.userLoginPage);

router.post("/login",userController.userLoginPost);

router.get("/register",userController.userRegisterPage);

router.post("/register",userController.userRegisterPost);

module.exports = router;