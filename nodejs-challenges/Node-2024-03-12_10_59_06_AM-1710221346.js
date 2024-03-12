/*
Routing in Express.js:

Description: Create an Express.js application with multiple routes 
(e.g., "/home", "/about", "/contact") that respond with appropriate messages.
*/
import express from 'express';

const app = express();

app.get('/home', (req, res) => {
  res.status(200).send('You are at the home page');
});

app.get('/about', (req, res) => {
  res.status(200).send('You are at the about page');
});

app.get('/contact', (req, res) => {
  res.status(200).send('You are at the contact page');
});

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

const port = 3000;

app.listen(port, () => console.log(`Server is listing on http://localhost:${port}`));
