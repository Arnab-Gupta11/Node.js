// 1: Create a folder named it Biodata
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder?

const fs = require("fs");

// // 1.
// fs.mkdir("Biodata", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("successfull");
//   }
// });

// // 2.
// fs.writeFile("./Biodata/Bio.txt", "Hi My name is Arnab Gupta.", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("successfull");
//   }
// });

// 3.
// fs.appendFile("./Biodata/Bio.txt", "I am a frontent developer.", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("successfull");
//   }
// });

// 4.
// fs.readFile("./Biodata/Bio.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(data);
//   }
// });

// 5.
// fs.rename("./Biodata/Bio.txt", "./Biodata/MyBio.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Successfull");
//   }
// });

// 6.
// fs.unlink("./Biodata/MyBio.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("Successfull");
//   }
// });

// 7.
fs.rmdir("Biodata", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfull");
  }
});
