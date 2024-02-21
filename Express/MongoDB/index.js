const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> console.log('Connection is successful'))
.catch(err => console.log('Couldnt connect to MongoDB',err));


//Schema

const courseSchema = new mongoose.Schema({
    name : String,
    creator: String,
    publishedDate : { type: Date , default: Date.now()},
    isPublished: Boolean
});

// models  In oops we have class and object car is class - Ausi is object 
// model is object to  schema

const Course = mongoose.model('Course', courseSchema);



const  createCourse = async () => {
    const course = new Course({
        name : 'Learn Python',
        creator: 'Ayushi',
        isPublished: true
    });
    
    const result = await course.save();
    
    console.log(result);
}



const getCourses = async()=>{

    const courses = await Course.find({creator:'Ayushi'}).select({name:1,publishedDate: 1}).sort({name:1})
    console.log(courses);
}
getCourses();