'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ZipCodeSchema = new Schema({
  zip: {
    type: String,
    required: 'Enter zip code'
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  latitude: {
	type: String
  },
  longitude: {
	type: String
  }
});

module.exports = mongoose.model('ZipCodes', ZipCodeSchema);
