const router = require('express').Router();
const Product = require('../controller/product.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');
const upload = require('../middleware/upload');


router.post('/', authent, authori, upload,  Product.create);

router.put('/:id', authent, authori, upload, Product.update);

router.get('/', authent, authori, Product.readAdmin);

router.get('/readAll', Product.read);

router.get('/search/:kata', Product.search);

router.get('/category/:category', Product.findByCategory);

router.get('/:id', Product.findId);

router.delete('/:id', authent, authori, Product.delete);

module.exports = router;   