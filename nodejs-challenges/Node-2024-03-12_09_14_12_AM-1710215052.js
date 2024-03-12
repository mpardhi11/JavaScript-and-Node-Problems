/* Create a Simple HTTP Server:

Description: Write a Node.js script to create a simple HTTP server that listens 
on port 3000 and responds with "Hello, World!" for all requests.
 */

import http from "http";

const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
