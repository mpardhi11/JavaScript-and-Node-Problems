/*
Middleware in Express.js:

Description: Write an Express.js application with a middleware function 
that logs "Request received at {current_time}" for every incoming request.
*/

import express from 'express';

const app = express();

app.use((_, _, nxt) => {
  console.log(new Date());
  nxt();
});

app.use((req, res) => {
  res.send('Hello, Express!').status(200);
});

const port = 3000;

app.listen(port, () => console.log(`Server is listing on http://localhost:${port}`));

/*
Server is listing on http://localhost:3000
2024-03-12T05:27:22.234Z
2024-03-12T05:27:31.145Z
*/
