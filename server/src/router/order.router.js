const router = require('express').Router();
const Order = require('../controller/order.controller');
const authent = require('../middleware/authentication');

router.post('/', authent, Order.create);

router.get('/', authent, Order.read);

router.get('/:id', authent, Order.findId)

module.exports = router;   