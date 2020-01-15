const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"]
  },
  arrival: {
    type: Date
  }
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  flightNo: {
    type: Number
  },
  departs: {
    type: Date,
    default: function() {
      let oneYearFromNow = new Date();
      return oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    }
  },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SEA"],
    default: "SEA"
  },
  arrival: [destinationSchema]
});

module.exports = mongoose.model("Flight", flightSchema);
