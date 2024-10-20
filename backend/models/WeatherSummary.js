const mongoose = require("mongoose");

const weatherSummarySchema = new mongoose.Schema({
  city: String,
  date: Date,
  avg_temp: Number,
  max_temp: Number,
  min_temp: Number,
  dominant_weather: String,
});

module.exports = mongoose.model("WeatherSummary", weatherSummarySchema);
