const express = require('express');
const { Course, validate} = require('../models/courseModel');
const { Category } = require('../models/categoryModel');

const router = express.Router();



router.get('/', async (req, res) => {
    let courses = await Course.find();
    res.send(courses);
});


router.post('/', async (req, res) =>{
    let {error} = validate(req.body);
     if(error) return res.status(400).send(error.details[0].message);


     let category = await Category.findById(req.body.categoryId);
     if(!category) return res.status(400).send('Invalid Category ID');
    const course = new Course({
        title : req.body.title,
        creator : req.body.creator,
        rating : req.body.rating,
        category :{
            __id : category.id,
            name: category.name

        }
    });
    let result = await course.save();
    res.send(result);
})


router.put('/:id',async (req, res) => {
    const {error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let category = await Category.findById(req.body.categoryId);
    if(!category) return res.status(400).send('Invalid Category ID');

    const course = await Course.findByIdAndUpdate(req.params.id, {
        title: req.body.title , 
        rating: req.body.rating, 
        creator : req.body.creator,
        category :{
            __id : category.id,
            name: category.name

        }},
        {new : true})
    if(!course) return res.status(404).send('The course with given Id does not exist');

    // if(error) return res.status(400).send(error.details[0].message);
        res.send(course);
})

router.delete('/:id', async (req,res) => {
    const course = await  Course.findByIdAndDelete(req.params.id);
    if(!course) return res.status(404).send('Th course with given Id does not exist');
    res.send(course);

});


router.get('/:id', async (req,res) => {
    const course = await Course.findById(req.params.id);
    if(!course) return res.status(404).send('Th course with given Id does not exist');
    res.send(course); 
});


module.exports = router ;