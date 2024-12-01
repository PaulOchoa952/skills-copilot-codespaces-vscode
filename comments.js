//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create comments
const comments = [
  {name: 'John', comment: 'Hello World!'},
  {name: 'Mary', comment: 'Hi there!'},
  {name: 'Joe', comment: 'Howdy!'}
];

//Serve static files
app.use(express.static('public'));

//Serve comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

//Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});