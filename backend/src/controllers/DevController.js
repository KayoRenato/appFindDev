const axios = require('axios'); //library that allows you to make API requests
const Dev = require('../models/Dev') // import schema from  Dev file for create data in database MongoDB 

// named function required in the Dev file that registers a user in the database
module.exports = {
  async store(req,res){
    const {github_username, techs, latitude, longitude} = req.body;
  
    // request github API data. Must pass 'wait' flag due to delayed response
    const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)
  
    // destruction method (name = login) - if name equals false, default is login
    const { name = login, avatar_url, bio } = apiRes.data;
  
    // the techs on Dev.js. are an array of strings, so you must split the string when showing ',' (.split) and removing empty space (.map and .trim)
    const techsArray = techs.split(',').map(item => item.trim());
  
    // assigning the request latitudes and longitudes to the database schema
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
  
    // registration create in mongoose database as per schema of Dev.js file registered in models folder
    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });
  
    return  res.json(dev);
  }
}