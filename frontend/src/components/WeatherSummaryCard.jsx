export default function WeatherSummaryCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">
        Weather Summary for {data.city}
      </h2>
      <p>Date: {new Date(data.date).toLocaleDateString()}</p>
      <p>Average Temperature: {data.avg_temp.toFixed(1)}°C</p>
      <p>Maximum Temperature: {data.max_temp.toFixed(1)}°C</p>
      <p>Minimum Temperature: {data.min_temp.toFixed(1)}°C</p>
      <p>Dominant Weather: {data.dominant_weather}</p>
    </div>
  );
}
