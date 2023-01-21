const {readFileSync, writeFileSync} = require('fs');
const path = require('path');


/**
 * @desc get all teachers data
 * @name GET /api/v1/user
 * @access public
 */
const getTeachers = (req, res) => {
    // get users data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    //send data
    res.status(200).json(teachers);
}

/**
 * @desc create teachers data
 * @name POST /api/v1/teacher
 * @access public
 */
const createTeacher = (req, res) => {
    // get users data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    //get body data
    const {name, age, cell} = req.body;

    //validation
    if( !name || !age || !cell) {
        res.status(400).json({
            message : "All fields are required"
        });
    } else {
        teachers.push({
            id : Math.floor(Math.random() * 10000000000).toString(),
            name : name,
            age : age,
            cell : cell

        });
        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(teachers));
        res.status(201).json({
            message : "Teacher created Succefully"
        })       
    }

    
}

/**
 * @desc get a single Teacher
 * @name GET /api/v1/teacher/:id
 * @access public
 */

const singleTeacher = (req, res) => {
    // get users data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    const singleTeacher = users.find(data => data.id == req.params.id);
    

    if(singleTeacher) {
        res.status(200).json(singleTeacher);
    }else {
        res.status(404).json({
            message : "Single Teahcer not found"
        })
    }

    
}

/**
 * @desc delete teacher
 * @name DELETE /api/v1/teacher/:id
 * @access public
 */
const deleteTeacher = (req, res) => {
    // get users data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    
    if (teachers.some(data => data.id == req.params.id)) {
        const data = teachers.filter(data => data.id != req.params.id);
        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(data));
        res.status(200).json({
            message : "Teacher deleted Successfully"
        })
    }else {
        res.status(404).json({
            message : "Teacher not Found"
        })
    }
    
    
}

/**
 * @desc update Teacher
 * @name PUT/PATCH /api/v1/teacher/:id
 * @access public
 */
const updateTeacher = (req, res) => {
    // get users data from json db
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    
    if (teachers.some(data => data.id == req.params.id)) {

        teachers[teachers.findIndex(data => data.id == req.params.id)] = {
            ...teachers[teachers.findIndex(data => data.id == req.params.id)],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(teachers));
        res.status(200).json({
            message : "Teacher updated successfully"
        })
            
    }else {
        res.status(404).json({
            message : "Teacher not Found"
        })
    } 

}

module.exports = {
    getTeachers,
    createTeacher,
    singleTeacher,
    deleteTeacher,
    updateTeacher

}