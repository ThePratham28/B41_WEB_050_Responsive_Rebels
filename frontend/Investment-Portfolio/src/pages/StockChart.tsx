import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface StockChartProps {
  labels: string[]; // Array of timestamps for the x-axis
  dataPoints: number[]; // Array of closing prices for the y-axis
}

const StockChart: React.FC<StockChartProps> = ({ labels, dataPoints }) => {
  const data = {
    labels, // Timestamps for the x-axis
    datasets: [
      {
        label: 'Stock Price (USD)',
        data: dataPoints,
        borderColor: 'rgba(75, 192, 192, 1)', // Line color
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area under the line
        borderWidth: 2, // Line thickness
        pointRadius: 3, // Size of points on the line
        tension: 0.2, // Smooth curves for the line
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const, // Show legend at the top
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time', // X-axis label
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price (USD)', // Y-axis label
        },
        beginAtZero: false, // Start y-axis from the lowest price
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default StockChart;
