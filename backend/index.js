const express = require('express'); //libray to create routes for app

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Hello World'}); //
});

app.listen(3333); //