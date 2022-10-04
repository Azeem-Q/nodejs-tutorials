//chapter 1 - start here

// node runs on server its a backend language unlike vanilla js

console.log("Hello World");

// node is global object instead of window object

//console.log(global);

// node has common core modules that we will explore
// to import common core modules we require to use commonjs modules instead of es6 modules i.e. require intead of import
// node missing some vanilla JS apis like fetch

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math");

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
*/

// chapter 2 - write files
