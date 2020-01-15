const mongoose = require('mongoose'); // required to inform the entity format database

//entity structure within the database
const DevSchema = new mongoose.Schema ({
  name: String,
  github_username: String,
  avatar_url: String,
  techs: [String],
}); 

//provide data por other database (name in database, entity structure)
module.exports = mongoose.model('Dev', DevSchema); 