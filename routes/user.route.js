const express = require('express');
const path = require('path');
const shopController = require('../controllers/user.ctrl');

const router = express.Router();

router.post('/add-to-cart', shopController.addToCart);

router.get('/cart', shopController.getCart);

router.post('/delete-cart', shopController.deleteInCart);

module.exports = router;