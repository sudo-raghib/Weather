import { useState } from "react";
import WeatherSummaryCard from "../components/WeatherSummaryCard";
import WeatherChart from "../components/WeatherChart";
import { getData } from "../utils/api";
import { CONFIG } from "../utils/config";
import { CITIES } from "../constants";

export default function WeatherSummary() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0]);
  const [weatherSummary, setWeatherSummary] = useState(null);

  const handleFetchData = async () => {
    console.log("handle fetcj", selectedCity);
    try {
      const response = await getData(
        `${CONFIG.API_BASE_URL}/summary/${selectedCity}`
      );
      setWeatherSummary(response);
    } catch (error) {
      console.error("Error fetching and processing weather data:", error);
    }
  };

  return (
    <div>
      <h1>Weather Summary</h1>
      <div className="mb-4 flex justify-center items-center">
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <button
          onClick={handleFetchData}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition duration-300 ease-in-out"
        >
          Fetch Latest Data
        </button>
      </div>

      <WeatherSummaryCard data={weatherSummary} />
      <WeatherChart data={weatherSummary} />
    </div>
  );
}
