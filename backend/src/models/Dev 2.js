const mongoose = require('mongoose'); // required to inform the entity format database
const PointSchema = require('./utils/PointSchema'); //Schema for geolocation provided by the mongoose documentation 

//entity structure within the database
const DevSchema = new mongoose.Schema ({
  name: String,
  github_username: String,
  avatar_url: String,
  bio: String,
  techs: [String],
  location: {
    type:PointSchema,
    index: '2dsphere'
  }
}); 

//provide data por other database (name in database, entity structure)
module.exports = mongoose.model('Dev', DevSchema); 