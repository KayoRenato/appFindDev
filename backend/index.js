const express = require('express'); //library available to create routes for app
const mongoose = require('mongoose'); //library enables to communicate the app with mongodb
const app = express(); //function for acess routes

app.use(express.json()); //  The requests 'PUT' and 'POST' respond through json format and as the application native not understand format json, so is necessary to registry this format on request express.

mongoose.connect('mongodb+srv://kayo:m0ng0_081187@cluster0-glex1.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
// check user, password and change default database name 'test'

// HTTP METHODS: GET, PUT, POST, DELETE

// PARAMETER TYPES:

// Query params - req.query, (filter, sort, pagination, ...) - GET
// Routes params - req.params, (identify a resource on the modification or removal) - DELETE
// Body - req.body, (data to create or modify a registry) - PUT OR POST

//created first route -  when the user to access 'localhost:3333/user' the route will execute a function
app.get  ('/users', (req, res) => {
  console.log(req.query);
  return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
} ); 

//created second route - user removed through informed identification params(./:id)
app.delete('/users/:id', (req, res) => {
  console.log(req.params);
  return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
} ); 

// third route created - to create an user passing your information through json in body
app.post('/users', (req,res) => {
  console.log(req.body);
  return  res.json({ message: 'Hello Dev'});
});

// MongoDB Atlas (noSQL Cloud)


app.listen(3333); // acess to local server, localhost on port 3333