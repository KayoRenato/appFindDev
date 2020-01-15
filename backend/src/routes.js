const {Router} = require('express'); //library available to create routes for app
const routes = Router();
const DevController = require('./controllers/DevController'); //object imported from DevController file with persistent data in MongoDB database
const SearchController = require('./controllers/SearchController'); //object imported from SearchController file with persistent data in MongoDB database

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes; //provide routes por other files


// HTTP METHODS: GET, PUT, POST, DELETE

// PARAMETER TYPES:

// Query params - req.query, (filter, sort, pagination, ...) - GET
// Routes params - req.params, (identify a resource on the modification or removal) - DELETE
// Body - req.body, (data to create or modify a registry) - PUT OR POST

/*
  //created first route -  when the user to access 'localhost:3333/user' the route will execute a function
  
  routes.get  ('/users', (req, res) => {
    console.log(req.query);
    return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
  } ); 

  //created second route - user removed through informed identification params(./:id)
  
  routes.delete('/users/:id', (req, res) => {
    console.log(req.params);
    return  res.json({ message: 'Hello Dev'}); // respond of static form with object Json, but can be other types (image, text, ...). require nodemon library for respond dynamically
  } ); 
*/

// third route created - to create an user passing your information through json in body
