const http = require("http");
const port = 2000;
const hostname = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  res.end("<h1>I am a server</h1>");
}); //.listen(2000);
myServer.listen(port, hostname, () => {
  console.log(`Server is running successfully at http://${hostname}:${port}`);
});
