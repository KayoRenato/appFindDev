const express = require('express'); //library available to create routes for app
const mongoose = require('mongoose'); //library enables to communicate the app with mongodb
const cors = require('cors');
const routes = require('./routes'); //import routes from file routes.js

const app = express(); //function for acess routes

// MongoDB Atlas (noSQL Cloud)
// check user, password and change default database name 'test'
mongoose.connect('mongodb+srv://kayo:m0ng0_081187@cluster0-glex1.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors()); //permit externe access API, {origin: 'http:/localhost:3000' } restrited local use code
app.use(express.json()); //  The requests 'PUT' and 'POST' respond through json format and as the application native not understand format json, so is necessary to registry this format on request express. Must come before routes
app.use(routes); // providing all registered routes to the app


app.listen(3333); // acess to local server, localhost on port 3333