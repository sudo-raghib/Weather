import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentWeather from "./pages/CurrentWeather";
import WeatherSummary from "./pages/WeatherSummary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CurrentWeather />} />
        <Route path="/summary" element={<WeatherSummary />} />
      </Routes>
    </BrowserRouter>
  );
}
