const http = require("http");
const fs = require("fs");
const port = 2000;
const hostname = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  const handleReadFile = (statusCode, filelocation) => {
    fs.readFile(filelocation, (err, data) => {
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url == "/") {
    handleReadFile(200, "./views/index.html");
  } else if (req.url == "/contact") {
    handleReadFile(200, "./views/contact.html");
  } else if (req.url == "/about") {
    handleReadFile(200, "./views/about.html");
  } else {
    handleReadFile(404, "./views/error.html");
  }
});
myServer.listen(port, hostname, () => {
  console.log(`Server is running successfully at http://${hostname}:${port}`);
});
