const Joi = require('joi');
const mongoose = require('mongoose');
const { categorySchema } = require('./categoryModel');



const Course = mongoose.model('Course', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength : 3, 
        maxLength : 255
    },
    category :{
        type: categorySchema,
        required: true
    },
    creator: {
        type : String, required : true
    },
    rating : {
        type : Number,
        reuired: true,
    }
}));

function validateData(course){
    const schema = {
        title : Joi.string().min(3).max(100).required(),
        creator : Joi.string().min(1).max(10).required(),
        rating : Joi.number(),
        categoryId: Joi.string().required()

    }
    return Joi.validate(course,schema);
}

exports.Course = Course;

exports.validate = validateData;