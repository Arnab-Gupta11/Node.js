const fs = require("fs");

//In async function always need to use callback function.
//But in synchronus function no need to use callback function
//console.log(fs); we can see all the function of fs module

//If demo file is already exist then write function override the existing file otherwise create first
// fs.writeFile("demo.txt", "My name is Arnab Gupta.", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

//override the existing file
// fs.writeFile("demo.txt", "I am 20 years old", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

// fs.appendFile("demo.txt", " I am 20 years old", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

fs.readFile("bigdata.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

// fs.rename("demo.txt", "demo2.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

//Delete file
// fs.unlink("demo.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("succesfull");
//   }
// });

// fs.exists("demo2.txt", (result) => {
//   if (result) {
//     console.log("found");
//   } else {
//     console.log("not found");
//   }
// });
