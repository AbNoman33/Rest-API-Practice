const express = require('express');
const { getAlluser, createUser } = require('../controllers/userController');

//create a router
const router = express.Router();

//user routes
router.get('/', getAlluser);
router.post('/', createUser);

//export router
module.exports = router;