const http = require("http");
const port = 2000;
const hostname = "127.0.0.1";
const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/html" });
  res.write("<h1>I am a new server</h1>");
  res.end();
}); //.listen(2000);
myServer.listen(port, hostname, () => {
  console.log(`Server is running successfully at http://${hostname}:${port}`);
});
