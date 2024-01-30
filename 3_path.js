const path = require('path');

let ext = path.extname('C:\Users\aashi\OneDrive\Documents\workspace\Learn Node JS\file.txt');
console.log(ext);


let basename = path.basename('C:\\Users\\aashi\\OneDrive\\Documents\\workspace\\Learn Node JS\\file.txt');
console.log(basename);

//current filename and path
console.log(__filename);

//current dir name
console.log(__dirname);