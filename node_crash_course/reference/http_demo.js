const http = require("http");

//Create server obk
http.createServer((req, res) => {
    //wrtie a response#
    res.write("Hello World");
    res.end()
}).listen(5000, () => console.log("server running..."));
//need to listen on a port