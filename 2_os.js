const os = require('os');

console.log(os.arch()) // tells architecture (64 , 32);

console.log(os.platform());

console.log(os.networkInterfaces());
console.log(os.cpus());

console.log(os.totalmem());
console.log(os.freemem());