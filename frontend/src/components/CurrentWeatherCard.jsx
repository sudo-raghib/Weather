import { useEffect, useState } from "react";
import { getData } from "../utils/api";
import { CONFIG } from "../utils/config";

export default function CurrentWeatherCard({ city, weatherFetchInterval }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const response = await getData(
          `${CONFIG.API_BASE_URL}/current/${city}`
        );
        setCurrentWeather(response);
      } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
      }
    }

    fetchWeatherData();
    const intervalId = setInterval(
      fetchWeatherData,
      weatherFetchInterval * 60000
    );

    return () => clearInterval(intervalId);
  }, [city, weatherFetchInterval]);

  if (!currentWeather) {
    return <h4>Loading weather...</h4>;
  }

  const { temp, feels_like, main, date } = currentWeather;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[30%]">
      <h2 className="text-2xl font-bold mb-4">Current Weather in {city}</h2>
      <p>Temperature: {temp.toFixed(1)}°C</p>
      <p>Feels Like: {feels_like.toFixed(1)}°C</p>
      <p>Weather Condition: {main}</p>
      <p>Last Updated: {new Date(date).toLocaleString()}</p>
    </div>
  );
}
