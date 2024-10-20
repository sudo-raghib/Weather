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

    // Process the weather data to ensure the summary is up-to-date
    await processWeatherData({ city });

    res.status(200).json(currentWeather);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching current weather data" });
  }
});

// router.get("/summary/:city", async (req, res) => {
//   try {
//     const { city } = req.params;
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     // // Process the weather data to ensure the summary is up-to-date
//     // await processWeatherData({ city });

//     // Fetch the summary for the current day
//     const summary = await WeatherSummary.findOne({
//       city,
//       date: today,
//     });

//     if (!summary) {
//       return res.status(404).json({ error: "No summary found for today" });
//     }

//     res.status(200).json(summary);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching weather summary" });
//   }
// });

router.get("/summaries/:city", async (req, res) => {
  try {
    const { city } = req.params;
    const summaries = await WeatherSummary.find({ city }).sort({ date: 1 });

    if (!summaries || summaries.length === 0) {
      return res.status(404).json({ error: "No summaries found for the city" });
    }

    res.status(200).json(summaries);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather summaries" });
  }
});

module.exports = router;
