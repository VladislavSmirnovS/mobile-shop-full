const router = require('express').Router();
const { createProduct, searchProduct, getProduct } = require('../controllers/products');

router.post('/create', createProduct);
router.get('/search', searchProduct);
// router.get('/', getProduct);



module.exports = router;
