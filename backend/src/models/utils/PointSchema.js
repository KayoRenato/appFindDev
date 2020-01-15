const mongoose = require('mongoose');

// Localization Scheme created to enter in the Dev Scheme
// structure provided by the mongoose documentation for geolocation 
const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  
  coordinates: {
    type: [Number],
    required: true
  }

});

module.exports = PointSchema;

