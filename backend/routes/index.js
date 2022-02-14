const router = require('express').Router();
const { createProduct, searchProduct} = require('../controllers/products');

router.post('/create', createProduct);
router.get('/search', searchProduct);

module.exports = router;
