const axios = require("axios");
const WeatherData = require("../models/WeatherData");
const WeatherSummary = require("../models/WeatherSummary");

const CITIES = [
  "Delhi",
  "Mumbai",
  "Chennai",
  "Bangalore",
  "Kolkata",
  "Hyderabad",
];
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

async function fetchWeatherData({ city }) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: process.env.OPEN_WEATHER_API_KEY,
        units: "metric",
      },
    });

    const { main, weather, dt } = response.data;
    const weatherData = new WeatherData({
      city,
      date: new Date(dt * 1000),
      temp: main.temp,
      feels_like: main.feels_like,
      main: weather[0].main,
    });

    await weatherData.save();
    console.log(`Weather data saved for ${city}`);
    return weatherData;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error.message);
  }
}

async function processWeatherData({ city }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const dailyData = await WeatherData.find({
      city,
      date: { $gte: today },
    });

    if (dailyData.length > 0) {
      const temps = dailyData.map((data) => data.temp);
      const weatherConditions = dailyData.map((data) => data.main);

      const summary = new WeatherSummary({
        city,
        date: today,
        avg_temp: temps.reduce((a, b) => a + b) / temps.length,
        max_temp: Math.max(...temps),
        min_temp: Math.min(...temps),
        dominant_weather: mode(weatherConditions),
      });

      await summary.save();
      console.log(`Daily summary updated for ${city}`);
    }
  } catch (error) {
    console.error(`Error processing weather data for ${city}:`, error.message);
  }
}

function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

module.exports = { fetchWeatherData, processWeatherData };
