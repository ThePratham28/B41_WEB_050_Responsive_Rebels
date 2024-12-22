import Footer from '@/components/LandingPage/Footer'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../Animation/man-investing-in-cryptocurrency.json'
import animation2 from '../../../Animation/trading-chart.json'
import image2 from '../../../assets/image1.png'
import { useNavigate } from 'react-router-dom'
import animation3 from '../../../Animation/software-developers-working-on-project.json'
import animation4 from '../../../Animation/security.json'
import animation5 from '../../../Animation/one-team-one-direction.json'
import animation6 from '../../../Animation/the-boy-is-working-on-finance-on-laptop.json'
import { Container } from '@chakra-ui/react'

export default function Home () {
  const navigate = useNavigate()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animation2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animation3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animation4,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animation6,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'black'
        }}
      >
        <Navbar />
        <Container w={'83%'}>
          <div
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bolder',
              lineHeight: '50px'
            }}
          >
            <h1>All Your Investments.</h1>
            <h1>One App. Total Control.</h1>
          </div>
          <p
            style={{
              textAlign: 'center',
              color: '#abb2b9',
              marginTop: '30px'
              // fontWeight: 'bold'
            }}
          >
            Aggregate all your investments in one app and gain valuable insights
            through detailed analysis.
          </p>

          <div style={{ flex: '1' }}>
            <Lottie
              options={defaultOptions}
              height={600}
              width={600}
              // box-shadow: rgb(0, 0, 56) 0px 22px 70px 4px;
              style={{
                boxShadow: 'rgb(186, 186, 240) 0px 22px 70px 10px',
                marginTop: '100px',
                marginBottom: '100px'
                // boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
              }}
            />

            <div style={{ textAlign: 'center', color: 'white' }}>
              <h3
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: '3rem',
                  fontWeight: 'bolder',
                  marginTop: '100px',
                  marginBottom: '50px'
                }}
              >
                See your real profits
              </h3>
              <p style={{ color: '#abb2b9' }}>
                Use the portfolio tracker to get a transparent overview of your
                costs, taxes and dividends.
              </p>
              <p style={{ color: '#abb2b9' }}>
                {' '}
                See your actual investment performance using advanced return
                metrics and track your actual net worth.
              </p>
            </div>
            <div>
              <Lottie
                options={defaultOptions1}
                height={500}
                width={600}
                style={{
                  marginTop: '100px',
                  marginBottom: '100px'
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '0 10px'
              }}
            >
              <div style={{ width: '35%' }}>
                <h2
                  style={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bolder',
                    lineHeight: '60px',
                    marginBottom: '25px'
                  }}
                >
                  Track past and future dividends
                </h2>
                <div
                  style={{
                    color: '#abb2b9',
                    fontSize: '0.9rem',
                    marginBottom: '25px'
                  }}
                >
                  <p>
                    Use our dividend calendar to track cumulative payouts, see
                    future dividend forecasts, year-on-year growth rate and
                    dividend yield.
                  </p>
                  <p>
                    Plan your future cash flows and know exactly when your
                    payments will arrive, without the hassle of creating complex
                    spreadsheets.
                  </p>
                  <p>
                    Discover the best stocks to fit your dividend portfolio.
                  </p>
                  <button
                    style={{
                      background: 'white',
                      color: 'black',
                      marginTop: '30px',
                      padding: '10px 15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}
                    onClick={() => navigate('/login')}
                  >
                    Start now
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 -960 960 960'
                      width='24px'
                      fill='#000000'
                    >
                      <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <Lottie
                  options={defaultOptions2}
                  height={500}
                  width={600}
                  style={{
                    marginTop: '100px',
                    marginBottom: '100px'
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '50px 0'
              }}
            >
              <hr style={{ width: '80%', color: '#f9f9f9' }} />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '0 10px'
              }}
            >
              <div>
                <div>
                  <Lottie
                    options={defaultOptions4}
                    height={500}
                    width={600}
                    style={{
                      marginTop: '100px',
                      marginBottom: '100px'
                    }}
                  />
                </div>
              </div>
              <div style={{ width: '35%', marginRight: 50 }}>
                <h2
                  style={{
                    color: 'white',
                    fontSize: '3rem',
                    fontWeight: 'bolder',
                    lineHeight: '60px',
                    marginBottom: '25px'
                  }}
                >
                  Deep insights through portfolio analysis
                </h2>
                <div
                  style={{
                    color: '#abb2b9',
                    fontSize: '0.9rem',
                    marginBottom: '25px'
                  }}
                >
                  <p>
                    Get detailed portfolio breakdowns based on geography,
                    industry, asset class and track all the numbers that matter
                    in one dashboard. Visualize your holdings in clear charts
                    and adjust your investment strategy on the fly based on
                    smart data.
                  </p>
                  {/* <p>
                  Plan your future cash flows and know exactly when your
                  payments will arrive, without the hassle of creating complex
                  spreadsheets.
                </p>
                <p>Discover the best stocks to fit your dividend portfolio.</p> */}
                  <button
                    style={{
                      background: 'white',
                      color: 'black',
                      marginTop: '30px',
                      padding: '10px 15px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '5px',
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}
                    onClick={() => navigate('/login')}
                  >
                    Start now
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='24px'
                      viewBox='0 -960 960 960'
                      width='24px'
                      fill='#000000'
                    >
                      <path d='M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '50px 0'
              }}
            >
              <hr style={{ width: '80%', color: '#f9f9f9' }} />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '0 10px'
            }}
          >
            <div style={{ width: '35%' }}>
              <h2
                style={{
                  color: 'white',
                  fontSize: '3rem',
                  fontWeight: 'bolder',
                  lineHeight: '60px',
                  marginBottom: '25px'
                }}
              >
                Maximum protection for your data
              </h2>
              <div
                style={{
                  color: '#abb2b9',
                  fontSize: '0.9rem',
                  marginBottom: '25px'
                }}
              >
                <p>
                  Protecting your privacy is just as important as securing your
                  data. We only collect the information we absolutely need,
                  ensuring that your identity remains anonymous. With
                  state-of-the-art encryption, no one can access your data – not
                  even us. Your security and privacy are always safeguarded.
                </p>
              </div>
            </div>
            <div>
              <div>
                <Lottie
                  options={defaultOptions3}
                  height={500}
                  width={600}
                  style={{
                    marginTop: '100px',
                    marginBottom: '100px'
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
        <div style={{ marginTop: '100px' }}>
          <Footer />
        </div>
      </div>
    </>
  )
}
