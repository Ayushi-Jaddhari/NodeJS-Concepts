const fs = require('fs');
//fs reads data in buffer 

//Reading a file



// writing in a file
// If we write all data will be overriden by data we are now writing
fs.writeFileSync('file.txt','This is trying to write in file');



//Append/Update a file

fs.appendFileSync('file.txt', ' Hello, This is Ayushi. Trying to learn Node ks. Its my Day 1;');
let fileContent = fs.readFileSync('file.txt');
console.log(''+ fileContent);


// Delete a file

fs.unlinkSync('file2.txt');

// Trying to write in file when it doesnt exist
// a new file will be created with the name provided
fs.writeFileSync('file3.txt' , 'Trying to write');



