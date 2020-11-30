const router = require('express').Router();
const Expedition = require('../controller/expedition.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', authent, authori, Expedition.create);

router.put('/:id', authent, authori, Expedition.update);

router.get('/', authent, authori, Expedition.readAdmin);

router.get('/:id', authent, authori, Expedition.findId);

router.get('/readAll', authent, Expedition.read);

router.get('/province', Expedition.getProvince);

router.get('/city', Expedition.getCity);

router.get('/cost/:origin/:destination/:courier', Expedition.getCity);

router.delete('/:id', authent, authori, Expedition.delete);

module.exports = router;   