const Dev = require('../models/Dev') // import schema from  Dev file for create data in database MongoDB 
const parseStringAsArray = require('../utils/parseStringAsArray'); //function to convert a string as array

module.exports = {

  async index(req, res){
    const {latitude, longitude, techs} = req.query;
    const techsArray = parseStringAsArray(techs);
    
    // find all devs within 10 km and filter by techs
    const devs = await Dev.find({
      techs: {
        $in: techsArray //mongo operators
      },
      location: {
        $near: {
          $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs })
  }
}