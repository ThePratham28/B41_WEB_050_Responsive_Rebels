import React, { useState, useEffect } from 'react';
import { fetchStockDataForGraph } from '../components/api/alphaVintage';
import StockChart from './StockChart';

interface RealTimeOverviewProps {
  symbol: string;
  interval: string;
  apiKey: string;
}

const RealTimeOverview: React.FC<RealTimeOverviewProps> = ({ symbol, interval, apiKey }) => {
  const [timestamps, setTimestamps] = useState<string[]>([]);
  const [closingPrices, setClosingPrices] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { timestamps, closingPrices } = await fetchStockDataForGraph(symbol, interval, apiKey);
        setTimestamps(timestamps);
        setClosingPrices(closingPrices);
      } catch (err) {
        setError('Failed to fetch stock data.');
      } finally {
        setLoading(false);
      }
    };

    // Fetch data initially
    fetchData();

    // Refresh data every 60 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [symbol, interval, apiKey]);


  console.log(timestamps,closingPrices);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>{symbol} - Real-Time Stock Prices</h2>
      <StockChart labels={timestamps} dataPoints={closingPrices} />
    </div>
  );
};

export default RealTimeOverview;
