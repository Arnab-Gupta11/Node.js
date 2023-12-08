const p = require("path");

// const extantionName = p.extname("index.html");
// console.log(extantionName);

// const baseName = p.basename(__dirname);
// console.log(baseName);
// console.log(__dirname);

const join = p.join(__dirname, "arnab");
console.log(join);

const myPath = p.parse("E:/Code/WEB-DEVELOPE/Node-js/4.path module/index.js");
console.log(myPath);
console.log(myPath.name);
