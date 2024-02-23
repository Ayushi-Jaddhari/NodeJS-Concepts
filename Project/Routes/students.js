const express = require('express');
const { Student, validate} = require('../models/studentModel');


const router = express.Router();



router.get('/', async (req, res) => {
    let students = await Student.find();
    res.send(students);
});


router.post('/', async (req, res) =>{
    let {error} = validate(req.body);
     if(error) return res.status(400).send(error.details[0].message);

    const student = new Student({
        Name : req.body.name,
        IsEnrolled : req.body.isEnrolled,
        Phone : req.body.phone
    });
    let result = await student.save();
    res.send(result);
})


router.put('/:id',async (req, res) => {
    const {error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const student = await Student.findByIdAndUpdate(req.params.id, {Name: req.body.name , Phone: req.body.phone, IsEnrolled : req.body.isEnrolled}, {new : true})
    if(!student) return res.status(404).send('Th student with given Id does not exist');

    // if(error) return res.status(400).send(error.details[0].message);
        res.send(student);
})

router.delete('/:id', async (req,res) => {
    const student = await  Student.findByIdAndDelete(req.params.id);
    if(!student) return res.status(404).send('Th student with given Id does not exist');
    res.send(student);

});


router.get('/:id', async (req,res) => {
    const student = await  Student.findById(req.params.id);
    if(!student) return res.status(404).send('Th student with given Id does not exist');
    res.send(student); 
});


module.exports = router ;