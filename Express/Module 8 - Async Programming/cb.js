const fs = require("fs");

console.log('Before Reading the file');
// SYNchronus way to read a file
// let dataFile1 = fs.readFileSync('f1.txt');

// console.log('File Data----------------------->'+ dataFile1);
// let dataFile2 = fs.readFileSync('f1.txt');

// console.log('File Data----------------------->'+ dataFile2);


//asynchronus way to read a file data

fs.readFile('f1.txt', cb1);
function cb1(err , data){
    if(err){
        console.log( 'Error----------------->' + err);
    }
    console.log('File1 Data--------------->'+ data);
}

fs.readFile('f2.txt', cb2);
function cb2(err , data){
    if(err){
        console.log( 'Error----------------->' + err);
    }
    console.log('File1 Data--------------->'+ data);
}

fs.readFile('f3.txt', cb3);
function cb3(err , data){
    if(err){
        console.log( 'Error----------------->' + err);
    }
    console.log('File1 Data--------------->'+ data);
}
 

console.log('After Reading the file');