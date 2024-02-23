const Joi = require('joi');
const mongoose = require('mongoose');


const categorySchema = mongoose.Schema({
    name: {type: String, require: true, minLength : 3, maxLength : 30}
});

const Category = mongoose.model('Category', categorySchema);

function validateData(category){
    const schema = {
        name : Joi.string().min(3).required()

    }
    return Joi.validate(category,schema);
}

exports.Category = Category;
exports.validate = validateData;
exports.categorySchema = categorySchema;