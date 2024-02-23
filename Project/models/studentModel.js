const Joi = require('joi');
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    Name: {type: String, require: true, minLength : 3, maxLength : 30},
    IsEnrolled : {type : Boolean, defaullt : false},
    Phone : {type : String, minLength: 10, maxLength: 11}
});

const Student = mongoose.model('Student', studentSchema);

function validateData(student){
    const schema = {
        Name : Joi.string().min(3).required(),
        Phone : Joi.string().min(10).max(10).required(),
        IsEnrolled : Joi.Boolean()

    }
    return Joi.validate(student,schema);
}

exports.Student = Student;

exports.validate = validateData;