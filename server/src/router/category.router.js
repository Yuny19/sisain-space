const router = require('express').Router();
const Category = require('../controller/category.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', authent, authori, Category.create);

router.put('/:id', authent, authori, Category.update);

router.get('/', authent, authori, Category.readAdmin);

router.get('/readAll', authent, Category.read);

router.get('/:id', authent, authori, Category.findId);

router.delete('/:id', authent, authori, Category.delete);

module.exports = router;   