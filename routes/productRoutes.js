const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');

const router = express.Router();

router.route('/').get(authMiddleware, productController.homePage);
router.route('/products').get(productController.productsPage);
router.route('/products-test').get(productController.productsTestPage);

module.exports = router;
