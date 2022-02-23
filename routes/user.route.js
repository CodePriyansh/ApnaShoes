const express = require('express');
const auth = require('../middleware/auth');

const userController = require('../controller/user.controller');
const router = express.Router();

router.get("/home",userController.userHomePage);

router.get("/",auth.isAuth,userController.userLoginPage);

router.post("/login",auth.isAuth,userController.userLoginPost);

router.get("/register",auth.isAuth,userController.userRegisterPage);

router.post("/register",auth.isAuth,userController.userRegisterPost);

module.exports = router;