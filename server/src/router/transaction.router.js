const router = require('express').Router();
const Transaction = require('../controller/transaction.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', authent, Transaction.create);

router.put('/:id', authent, Transaction.update);

router.get('/', authent, authori, Transaction.read);

router.get('/readByUser', authent, Transaction.readByUser);

router.get('/:id', authent, Transaction.findId);

module.exports = router;   