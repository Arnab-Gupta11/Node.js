const fs = require("fs");
const readStrim = fs.createReadStream(`${__dirname}/bigdata.txt`);

readStrim.on("data", (text) => {
  console.log(text);
});
console.log("hello");
