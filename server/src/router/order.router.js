const router = require('express').Router();
const Order = require('../controller/order.controller');
const authent = require('../middleware/authentication');

router.post('/', authent, Order.create);

router.put('/:id', Order.update);

router.get('/', authent, Order.read);

router.get('/user', authent, Order.readByUser);

router.get('/:id', authent, Order.findId);

router.delete('/:id', Order.delete);

module.exports = router;   