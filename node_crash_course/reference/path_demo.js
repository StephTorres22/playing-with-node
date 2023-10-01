const path = require('path');

/* base file name */
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extensions
console.log(path.extname(__filename));

//Create path obj
console.log(path.parse(__filename));
/* this creates an obj which means we can access individual properties, e.g root, base */

//Concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
//helpful with delimiters across different OS, e.g windows uses \ while linux/mac use /

