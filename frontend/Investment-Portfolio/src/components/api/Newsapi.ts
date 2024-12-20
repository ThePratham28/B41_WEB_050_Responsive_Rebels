import axios from 'axios';

const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

export const fetchNewsSentimentData = async () => {
    try {
        const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
            params: {
                function: "NEWS_SENTIMENT",
                tickers: "COIN,CRYPTO:BTC,FOREX:USD",
                time_from: "20220410T0130",
                limit: "1000",
                apikey: "G5JKQBFOWM37Y3OI"
            },
        });

        const data = response.data;
        if (!data || !data.feed) throw new Error('Invalid data format');

        // const feed = data.feed.map((item:any) => ({
        //     title: item.title,
        //     url: item.url,
        //     time_published: item.time_published,
        //     authors: item.authors || [],
        //     summary: item.summary,
        //     banner_image: item.banner_image,
        //     source: item.source,
        //     category_within_source: item.category_within_source,
        //     source_domain: item.source_domain,
        //     topics: item.topics.map((topic) => ({
        //         topic: topic.topic,
        //         relevance_score: parseFloat(topic.relevance_score),
        //     })),
        //     overall_sentiment_score: parseFloat(item.overall_sentiment_score),
        //     overall_sentiment_label: item.overall_sentiment_label,
        //     ticker_sentiment: item.ticker_sentiment.map((ticker) => ({
        //         ticker: ticker.ticker,
        //         relevance_score: parseFloat(ticker.relevance_score),
        //         ticker_sentiment_score: parseFloat(ticker.ticker_sentiment_score),
        //         ticker_sentiment_label: ticker.ticker_sentiment_label,
        //     })),
        // }));

        return {data};
    } catch (error) {
        console.error('Error fetching news sentiment data:', error);
        throw error;
    }
};
