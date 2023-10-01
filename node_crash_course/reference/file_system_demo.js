const fs = require("fs");
const path = require("path");

//Create folder
//takes path, optional obj, and a callback function
/* fs.mkdir(path.join(__dirname, "test"), {}, function (err) {
  if (err) throw err;
  console.log("Folder created...");
});  */
/* THIS IS COMMENTED OUT AS IT THROWS ERR IF FILE IS ALREADY CREATED */

//create and write to file
//takes path, and file, then content as string
//if file already exist, it overwrites it.
/* fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello World",
  (err) => {
    if (err) throw err;
    console.log("File written to...");

    //if you want to add/append to a file that already exists.
    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      "\nI love Node.js!",
      (err) => {
        if (err) throw err;
        console.log("file has been added too..");
      }
    );
    //added into callback as is async so could throw err if previous task wasn't completed if not within callback
    //remember there is a promise based fs and path too, don't necessarily need to use callbacks
  }
); */

//Read a file
// path, encoding, callback
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Rename file
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "hello_world.txt"),
  (err) => {
    if (err) throw er;
    console.log("File renamed...");
  }
);
