const express = require('express');

const router = express.Router();
const control = require('../controller/user.ctrl')

router.get('/',control.userHomePage);

module.exports = router;