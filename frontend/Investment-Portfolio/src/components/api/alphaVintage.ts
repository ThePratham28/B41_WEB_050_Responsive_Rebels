import axios from 'axios';

const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

export const fetchStockDataForGraph = async (symbol: string, interval: string, apiKey: string) => {
    try {
      const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol,
          interval,
          apikey: apiKey,
        },
      });
  
      const timeSeries = response.data['Time Series (1min)'];
      if (!timeSeries) throw new Error('Invalid data format');
  
      // Process data: extract timestamps and closing prices
      const timestamps = Object.keys(timeSeries).reverse(); // Reverse for chronological order
      const closingPrices = timestamps.map((timestamp) => parseFloat(timeSeries[timestamp]['4. close']));
  
      return { timestamps, closingPrices };
    } catch (error) {
      console.error('Error fetching stock data:', error); 
      throw error;
    }
  };
  