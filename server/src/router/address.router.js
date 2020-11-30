const router = require('express').Router();
const Address = require('../controller/address.controller');
const authent = require('../middleware/authentication');

router.post('/', authent, Address.create);

router.put('/:id', authent, Address.update);

router.get('/', authent, Address.read);

router.get('/:id', authent, Address.findId);

router.delete('/:id', authent, Address.delete);

module.exports = router;   