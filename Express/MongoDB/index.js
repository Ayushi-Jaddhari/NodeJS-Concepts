const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> console.log('Connection is successful'))
.catch(err => console.log('Couldnt connect to MongoDB',err));


//Schema

const courseSchema = new mongoose.Schema({
    name : String,
    creator: String,
    publishedDate : { type: Date , default: Date.now()},
    isPublished: Boolean,
    rating: Number
});

// models  In oops we have class and object car is class - Ausi is object 
// model is object to  schema

const Course = mongoose.model('Course', courseSchema);



const  createCourse = async () => {
    const course = new Course({
        name : 'OOPS',
        creator: 'Niray',
        isPublished: true,
        rating: 4.7
    });
    
    const result = await course.save();
    
    console.log(result);
}

// createCourse();

const getCourses = async()=>{

    const courses = await Course.find({creator:'Ayushi'}).select({name:1,publishedDate: 1}).sort({name:1})
    console.log(courses);
}

//Comparator Operator
//grt (greater than)
//gte (graeter than and equal to)
//lt (less than)
// lte (less than and equal to)
// in 
// not in

const getCoursesByRating = async()=>{
    const coursesGreaterThanRating = await Course.find({rating: {$gte : 4}}).select({name: 1, publishedDate : 1,rating: 1})
    const coursesSpecificToRating = await Course.find({rating: {$in : [4.5,3.9]}}).select({name: 1, publishedDate : 1,rating: 1})
    console.log('coursesGreaterThanRating--------------------------->',coursesGreaterThanRating );
    console.log('coursesSpecificToRating--------------------------->', coursesSpecificToRating);
}
// getCoursesByRating();


//Logical Operator

// or 
//and

const getCourseByCondition = async()=>{
    const courseOR = await Course.find({rating: {$in: [3.9,4.1,4.5,4.9]}}).select({creator: 1, name: 1, rating: 1, publishedDate: 1 }).or([{rating: 4.5}, {creator:'Niray'}]);
    const courseAND = await Course.find({rating: {$in: [3.9,4.1,4.5,4.9]}}).select({creator: 1, name: 1, rating: 1, publishedDate: 1 }).and([{rating: 4.5}, {creator:'Niray'}]);
    

    console.log('courseOR------------------------------->', courseOR);
    console.log('courseAND------------------------------->', courseAND);


}
// getCourseByCondition();

//Update Document

const updateCourse = async(id)=>{

    let course = await Course.findById(id);
    console.log(course);

    if(!course) return ;

    course.name = 'Ruby';
    course.creator = 'Praya';

    let updatedCourse = await course.save();
    console.log(updatedCourse);


}

// updateCourse('65d75e64e00316b8ba8142bb');

//delete a course


const deleteCourse = async(id)=>{
    const course = await Course.findByIdAndRemove(id);
    console.log('Course is Removed', course);
}

deleteCourse('65d75ea999997ee4745aa1d7')