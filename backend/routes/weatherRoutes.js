const express = require("express");
const WeatherData = require("../models/WeatherData");
const WeatherSummary = require("../models/WeatherSummary");
const {
  fetchWeatherData,
  processWeatherData,
} = require("../services/weatherService");

const router = express.Router();

router.get("/current/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const currentWeather = await fetchWeatherData({ city });
    res.status(200).json(currentWeather);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching current weather data" });
  }
});

router.get("/summary/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    await processWeatherData({ city });

    const summary = await WeatherSummary.find({
      city,
      date: { $gte: sevenDaysAgo },
    }).sort({ date: 1 });

    res.status(200).json(summary);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather summary" });
  }
});

module.exports = router;
