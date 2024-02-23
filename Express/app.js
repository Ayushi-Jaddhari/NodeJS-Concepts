const express = require('express');
const app = express();

//middleware
app.use(express.json())
//get, post
app.get('/',(req , res) => {
    res.send('Hello from scaler topics');
});
app.get('/about',(req , res) => {
    res.send('Hello in about page');
});
// Route Params
app.get('/courses/:id',(req , res) => {
    res.send(`Courses ${req.params.id}`);
});
//Course array

const courses = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'Python'}
];

app.get('/course/:name',(req , res) => {
    let course = courses.find(course => course.name === req.params.name);
    if(!course) return res.status(404).send('The course you are looking for does not exist');
    return res.send(course);
});

app.get('/getCourses', (req,res)=>{
    console.log('Get me all courses', courses);
    return res.send(courses);
});

app.post('/getCourses', (req,res)=>{
    const course = {
        id : courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    return res.send(courses);
})
const port = process.env.PORT || 3000;
app.listen(port , ()=> console.log(`port is running at ${port}`));