import Footer from '@/components/LandingPage/Footer'
import Navbar from '@/components/LandingPage/Navbar'
import React, { useState, useEffect } from 'react'
import { Grid, Flex, Spinner, Box } from '@chakra-ui/react' // Added Box for wrapper styling
import axios from 'axios'
import NewsCard from '@/components/Cards/News.card'
import { NewsJson } from '@/components/api/NewsJson'
import { Container } from '@chakra-ui/react'

export default function LatestNews () {
  const [news, setNews] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const fetchNewsSentimentData = async () => {
    // setLoading(true)
    try {
      const response = await axios.get(
        'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=COIN,CRYPTO:BTC,FOREX:USD&time_from=20220410T0130&limit=1000&apikey=RMKHRRP18LDZMEZB'
      )
      console.log(response?.data, 'response')
      setNews(response.data || [])
    } catch (error) {
      console.log('Error fetching news:', error)
    }
    // setLoading(false)
  }

  useEffect(() => {
    // fetchNewsSentimentData()
  }, [])

  console.log(news, 'news')

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'black'
      }}
    >
      <div>
        <Navbar />
      </div>
      <Container w = {"83%"}>
      <Box
        flex='1'
      >
        {loading ? (
          <Flex justify='center' align='center' height='100vh'>
            <Spinner size='xl' />
          </Flex>
        ) : (
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
            gap={6}
            // style={{ padding: '100px, 0' }}
          >
            {NewsJson &&
              NewsJson?.map((item: any, index: number) => (
                <NewsCard key={index} index={index} item={item} />
              ))}
          </Grid>
        )}
      </Box>
      </Container>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  )
}
