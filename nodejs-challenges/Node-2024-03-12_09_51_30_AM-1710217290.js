/*
Express.js Basics:

Description: Create a basic Express.js application that listens on port 3000 
and responds with "Hello, Express!" for all requests.
*/

import express from 'express';

const app = express();
const port = 3000;
app.use((_, res) => {
  res.send('Hello, Express!').status(200);
});

app.listen(port, function (err) {
  if (err) console.log('Error in server setup');
  console.log('Server listening on Port', port);
});

/* 
$ curl http://localhost:3000
Hello, Express!
$ curl http://localhost:3000/john
Hello, Express!
$ curl http://localhost:3000/12/emp
Hello, Express!
*/
