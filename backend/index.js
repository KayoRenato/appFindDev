const express = require('express'); //library available to create routes for app

const app = express(); //function for acess routes

// HTTP METHODS: GET, PUT, POST, DELETE

// PARAMETER TYPES:

// Query params - req.query(filter, sort, pagination, ...) - GET
// Routes params - req.params(identify a resource on the modification or removal)


//created first route -  when the user to access 'localhost:3333/user' the route will execute a function
app.get  ('/user', (req, res) => {
  console.log(req.query);
  return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
} ); 

//created second route - user removed through informed identification params(./:id)
app.delete('/user/:id', (req, res) => {
  console.log(req.params);
  return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
} ); 


app.listen(3333); // acess to local server, localhost on port 3333
