// 1: Create a folder named it Biodata
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder?

const fs = require("fs");

// 1.
// fs.mkdirSync("Biodata");

// 2.
// fs.writeFileSync("Biodata/Bio.txt", "Hello I am Arnab Gupta");

// 3.
// fs.appendFileSync("Biodata/Bio.txt", " I am junior web developer");

// 4.
// const data = fs.readFileSync("Biodata/Bio.txt", "utf-8");
// console.log(data);

// 5.
// fs.renameSync("Biodata/Bio.txt", "Biodata/MyBio.txt");

// 6.
// fs.unlinkSync("Biodata/MyBio.txt");
// fs.rmdirSync("Biodata");
