const router = require('express').Router();
const Product = require('../controller/product.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', authent, Product.create);

router.put('/:id', authent, Product.update);

router.get('/', authent, authori, Product.readAdmin);

router.get('/readAll', Product.read);

router.get('/:id', Product.findId);

router.delete('/:id', authent, Product.delete);

module.exports = router;   