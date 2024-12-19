import React, { useState, useEffect } from 'react';
// import { fetchStockData } from '../components/api/alphaVintage';

interface OverviewProps {
  symbol: string;
  interval: string;
  apiKey: string;
}

const Overview: React.FC<OverviewProps> = ({ symbol, interval, apiKey }) => {
  const [stockData, setStockData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        // const data = await fetchStockData(symbol, interval, apiKey);
        // setStockData(data);
      } catch (err) {
        setError('Failed to fetch stock data.');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol, interval, apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const timeSeries = stockData?.['Time Series (1min)'];
  const latestKey = timeSeries ? Object.keys(timeSeries)[0] : null;
  const latestData = latestKey ? timeSeries[latestKey] : null;

  return (
    <div>
      <h2>Overview - {symbol}</h2>
      {latestData ? (
        <div>
          <p><strong>Time:</strong> {latestKey}</p>
          <p><strong>Open:</strong> {latestData['1. open']}</p>
          <p><strong>High:</strong> {latestData['2. high']}</p>
          <p><strong>Low:</strong> {latestData['3. low']}</p>
          <p><strong>Close:</strong> {latestData['4. close']}</p>
          <p><strong>Volume:</strong> {latestData['5. volume']}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Overview;
