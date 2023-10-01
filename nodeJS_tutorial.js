const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

/* creates server, takes two params, request and response. not using request here */

const server = http.createServer((req, res) => {

    /* sets response status code, 200, successful */
  res.statusCode = 200;

  /* sest content type */
  res.setHeader("Content-Type", "text/plain");

  /* close response, adding our content as the argument */
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${[port]}`);
});
