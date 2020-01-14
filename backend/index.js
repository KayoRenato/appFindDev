const express = require('express'); //library available to create routes for app

const app = express(); //function for acess routes


// when the user to access route 'localhost:3333/' a function will be executed
app.get('/', (req, res) => {
  return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
} ); 


app.listen(3333); // acess to local server, localhost on port 3333
