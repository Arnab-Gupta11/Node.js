const http = require("http");
const fs = require("fs");

const server = http.createServer();

//Reading from stream
//create a readable stream
//handle stream event---> data,end,error
server.on("request", (req, res) => {
  const rstream = fs.createReadStream("data.txt");
  //1st way
  //   rstream.on("data", (chunkdata) => {
  //     res.write(chunkdata);
  //   });

  //   rstream.on("end", () => {
  //     res.end();
  //   });

  //   rstream.on("error", (err) => {
  //     console.log(err);
  //     res.end("file is not found");
  //   });

  //Another way
  //Using stream pipe
  rstream.pipe(res);
});
server.listen("3000", "127.0.0.1", () => {
  console.log("Server is running");
});
