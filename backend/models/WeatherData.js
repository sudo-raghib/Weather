const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema({
  city: String,
  date: Date,
  temp: Number,
  feels_like: Number,
  main: String,
  avg_temp: Number,
  max_temp: Number,
  min_temp: Number,
  dominant_weather: String,
});

module.exports = mongoose.model("WeatherData", weatherDataSchema);
