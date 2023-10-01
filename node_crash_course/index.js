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

const contentTypeMap = new Map();

contentTypeMap.set(".js", "text/Javascript");
contentTypeMap.set(".css", "text/css");
contentTypeMap.set(".json", "application/json");
contentTypeMap.set("png", "image/png");
contentTypeMap.set(".jpg", "image/jpg");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  /*    if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
      {
        name: "Bob",
        age: 40,
      },
      {
        name: "John",
        age: 33,
      },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }*/

  //Build a file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  //Get extension of file so we can set content-type header
  let extName = path.extname(filePath);

  function setContentTpye() {
    if (contentTypeMap.has(extName)) {
      return contentTypeMap.get(extName);
    } else return contentType;
  }
  //set initial content type
  let contentType = "text/html";

  //check ext and set content type
  /*   switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  } */
  //surely a map would be a better way! loop through map, if extName is equal to map key, contentType = to value.

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        //probably a server error, e.g 500
        res.writeHead(500);
        res.end(`Server error ${err.code}`);
      }
    } else {
      //success
      res.writeHead(200, { "Content-Type": setContentTpye() });
      res.end(content, "utf8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
