/* const Person = require("./person");
const Logger = require("./logger");

const johnDoe = new Person("John Doe", 32);

johnDoe.greeting();

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`Called Listener:`,data);
});

logger.log("Hello World") */

const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
