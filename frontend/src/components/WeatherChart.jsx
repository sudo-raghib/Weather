import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeatherChart({ data }) {
  if (!data || data.length === 0) return null;

  const chartData = {
    labels: data.map((d) => new Date(d.date).toLocaleDateString()),
    datasets: [
      {
        label: "Average Temperature",
        data: data.map((d) => d.avg_temp),
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Maximum Temperature",
        data: data.map((d) => d.max_temp),
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
      {
        label: "Minimum Temperature",
        data: data.map((d) => d.min_temp),
        borderColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature Trends",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
