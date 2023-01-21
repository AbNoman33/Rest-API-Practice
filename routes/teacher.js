const express = require('express');
const { getTeachers, createTeacher, singleTeacher, deleteTeacher, updateTeacher } = require('../controllers/teacherController');


//create a router
const router = express.Router();

//routes
router.route('/').get(getTeachers).post(createTeacher);
router.route('/:id').get(singleTeacher).delete(deleteTeacher).put(updateTeacher).patch(updateTeacher);

//export router
module.exports = router;