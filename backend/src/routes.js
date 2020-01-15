const {Router} = require('express'); //library available to create routes for app
const axios = require('axios'); //library that allows you to make API requests
const routes = Router();

// HTTP METHODS: GET, PUT, POST, DELETE

// PARAMETER TYPES:

// Query params - req.query, (filter, sort, pagination, ...) - GET
// Routes params - req.params, (identify a resource on the modification or removal) - DELETE
// Body - req.body, (data to create or modify a registry) - PUT OR POST

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

// third route created - to create an user passing your information through json in body
routes.post('/devs', async (req,res) => {
  const {github_username, techs} = req.body;

  // request github API data. Must pass 'wait' flag due to delayed response
  const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)

  // destruction method (name = login) - if name equals false, default is login
  const { name = login, avatar_url, bio } = apiRes.data;

  // the techs on Dev.js. are an array of strings, so you must split the string when showing ',' (.split) and removing empty space (.map and .trim)
  const techsArray = techs.split(',').map(item => item.trim());

  console.log(name, avatar_url, bio, github_username, techsArray);

  return  res.json({ message: 'Hello Dev'});
});


module.exports = routes; //provide routes por other files
