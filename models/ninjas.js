const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema

// craete geolocation schema

const GeoLocation = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});
const ninjaSchema = new Schema({
  name: {
    type: String
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoLocation
});

const Ninja = mongoose.model("ninja", ninjaSchema);
module.exports = Ninja;
