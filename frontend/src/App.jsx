import { BrowserRouter, Routes, Route } from "react-router-dom";
import CurrentWeather from "./pages/CurrentWeather";
import WeatherSummary from "./pages/WeatherSummary";
import { Header } from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CurrentWeather />} />
            <Route path="/summary" element={<WeatherSummary />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
