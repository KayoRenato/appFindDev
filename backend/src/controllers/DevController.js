const axios = require('axios'); //library that allows you to make API requests
const Dev = require('../models/Dev') // import schema from  Dev file for create data in database MongoDB 
const parseStringAsArray = require('../utils/parseStringAsArray'); //function to convert a string as array

// controllers have a maximum of 5 functions: index, show, store, update, destroy

// named function required in the Dev file that registers a user in the database
module.exports = {
  async index(req, res){
    
    const devs = await Dev.find(); 

    return res.json(devs);
  },

  async store(req,res){
    const {github_username, techs, latitude, longitude} = req.body;
  
    //verify existence of username in database
    let dev = await Dev.findOne({github_username});

    if (!dev){

      // request github API data. Must pass 'wait' flag due to delayed response
      const apiRes = await axios.get(`https://api.github.com/users/${github_username}`)
      
      // destruction method (name = login) - if name equals false, default is login
      const { name = login, avatar_url, bio } = apiRes.data;
      
      // the techs on Dev.js. are an array of strings, so you must split the string when showing ',' (.split) and removing empty space (.map and .trim)
      const techsArray =  parseStringAsArray(techs);
      
      // assigning the request latitudes and longitudes to the database schema
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
      
      // registration create in mongoose database as per schema of Dev.js file registered in models folder
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      });
      
    }

    return  res.json(dev);
  }
}