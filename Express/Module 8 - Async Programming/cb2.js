const fs = require('fs');
//Serial callbacks


fs.readFile('f1.txt', cb1);
function cb1(err , data){
    if(err){
        console.log( 'Error----------------->' + err);
    }
    console.log('File1 Data--------------->'+ data);
    fs.readFile('f2.txt', cb2);
}


function cb2(err , data){
    if(err){
        console.log( 'Error----------------->' + err);
    }
    console.log('File2 Data--------------->'+ data);
    fs.readFile('f3.txt', cb3);
}


function cb3(err , data){
    if(err){
        console.log( 'Error----------------->' + err);
    }
    console.log('File3 Data--------------->'+ data);
}
 

console.log('After Reading the file');