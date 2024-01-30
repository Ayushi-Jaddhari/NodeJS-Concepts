const fs = require('fs');

//create directory
// fs.mkdirSync('mydirectory');


//check the content inside of a directory


let folderPath = 'C:\\Users\\aashi\\OneDrive\\Documents\\workspace\\Learn Node JS\\mydirectory';

let folderContent = fs.readdirSync(folderPath);
console.log('' , folderContent );

// directory exist or not // work with file also

const doesExists = fs.existsSync('mydirectory1');
console.log(doesExists);

//delete directory
// will not delete because it has content
//first empty the directory and then delete
fs.rmdirSync('mydirectory');