const express = require('express');
const router = express.Router();

const userController = require('../../controllers/userController');

router.get('/', userController.get_users);

router.get('/:userId', userController.get_userById);

module.exports = router;
