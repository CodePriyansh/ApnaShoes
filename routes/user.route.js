const express = require('express');

const router = express.Router();
const control = require('../controller/user.ctrl')

router.get("/",control.userHomePage);

router.get("/user",control.userLoginPage);

router.post("/login",control.userLoginPost);

router.get("/register",control.userRegisterPage);

router.post("/register",control.userRegisterPost);


module.exports = router;


