import { useState, useEffect } from "react";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import { CITIES, WEATHER_INTERVAL } from "../constants";

export default function CurrentWeather() {
  const [weatherInterval, setWeatherInterval] = useState(WEATHER_INTERVAL);

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <label
          htmlFor="interval"
          className="block text-sm font-medium text-gray-700"
        >
          Weather Interval (in minutes)
        </label>
        <input
          type="number"
          id="interval"
          name="interval"
          value={weatherInterval}
          onChange={(e) => setWeatherInterval(e.target.value)}
          className="mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        Weather Monitor
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {CITIES.map((city) => {
          return (
            <CurrentWeatherCard
              key={city}
              city={city}
              weatherFetchInterval={weatherInterval}
            />
          );
        })}
      </div>
    </div>
  );
}
