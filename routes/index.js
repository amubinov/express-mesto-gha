const router = require('express').Router();

const { login } = require('../controllers/users');
const { createUser } = require('../controllers/users');
const auth = require('../middlewares/auth');
const { vlaidatorCreateUser } = require('../middlewares/validate');

router.post('/signin', vlaidatorCreateUser, login);
router.post('/signup', vlaidatorCreateUser, createUser);

router.use(auth);

router.use('/users', require('./users'));
router.use('/cards', require('./cards'));
router.use('/', require('./404'));

module.exports = router;
