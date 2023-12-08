const fs = require("fs");
const biodata = {
  name: "Arnab Gupta",
  roll: "ASH1901027M",
  subject: "CSTE",
};

const jsonData = JSON.stringify(biodata); //Object to json
fs.writeFile("biodata.json", jsonData, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Successfull");
  }
});

fs.readFile("biodata.json", "UTF-8", (err, data) => {
  const originalData = JSON.parse(data); //json to object
  if (err) {
    console.log(err.message);
  } else {
    console.log(originalData);
  }
});
