const router = require('express').Router();
const { vlaidatorUserId, vlaidatorUserAvatar, vlaidatorUserMe } = require('../middlewares/validate');

const {
  getUsers, getUserId, updateUser, updateAvatar, getUserMe,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getUserMe);

router.get('/:userId', vlaidatorUserId, getUserId);

router.patch('/me', vlaidatorUserMe, updateUser);

router.patch('/me/avatar', vlaidatorUserAvatar, updateAvatar);

module.exports = router;
