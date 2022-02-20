const express = require('express');

const router = express.Router();
const control = require('../controller/admin.ctrl')

router.get('/home',control.adminHomePage);
router.get('/',control.adminLoginPage);

module.exports = router;