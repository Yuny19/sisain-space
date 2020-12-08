const router = require('express').Router();
const Expedition = require('../controller/expedition.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', authent, authori, Expedition.create);

router.post('/cost/', Expedition.getCost);

router.put('/:id', authent, authori, Expedition.update);

router.get('/', authent, authori, Expedition.readAdmin);

router.get('/readAll', authent, Expedition.read);

router.get('/province', Expedition.getProvince);

router.get('/province/:provinceId', Expedition.getProvinceById);

router.get('/city/:provinceid', Expedition.getCity);

router.get('/:id', authent, authori, Expedition.findId);

router.delete('/:id', authent, authori, Expedition.delete);

module.exports = router;   