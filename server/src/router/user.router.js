const router = require('express').Router();
const User = require('../controller/user.controller');
const authent = require('../middleware/authentication');
const authori = require('../middleware/authorization');

router.post('/', User.create);

router.post('/login/google', User.loginGoogle);

router.post('/login/manual', User.loginManual);

router.post('/login/admin', User.loginAdmin);

router.put('/:id', authent, User.update);

router.get('/', authent, authori, User.read);

router.get('/:id', authent, authori, User.findId);

router.delete('/:id', authent, User.delete);

module.exports = router;   