const express = require('express');
const { getAlluser, createUser, singleUser, deleteUser, updateUser } = require('../controllers/userController');

//create a router
const router = express.Router();

//user routes
router.route('/').get(getAlluser).post(createUser);
router.route('/:id').get(singleUser).delete(deleteUser).put(updateUser).patch(updateUser);

//export router
module.exports = router;