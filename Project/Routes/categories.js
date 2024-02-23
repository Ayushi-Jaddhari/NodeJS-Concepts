const express = require('express');
const { Category, validate} = require('../models/categoryModel');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Reaching here')
    let categories = await Category.find();
    res.send(categories);
});


router.post('/', async (req, res) =>{
    let {error} = validate(req.body);
     if(error) return res.status(400).send(error.details[0].message);

    const category = new Category({
        name : req.body.name
    });
    let result = await category.save();
    res.send(category);
})


router.put('/:id',async (req, res) => {
    const {error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new : true})
    if(!category) return res.status(404).send('Th category with given Id does not exist');

    // if(error) return res.status(400).send(error.details[0].message);
        res.send(category);
})

router.delete('/:id', async (req,res) => {
    const category = await  Category.findByIdAndDelete(req.params.id);
    if(!category) return res.status(404).send('Th category with given Id does not exist');
    res.send(category);

});


router.get('/:id', async (req,res) => {
    const category = await  Category.findById(req.params.id);
    if(!category) return res.status(404).send('Th category with given Id does not exist');
    res.send(category); 
});


module.exports = router ;