import Footer from '@/components/LandingPage/Footer'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../Animation/man-investing-in-cryptocurrency.json'

export default function Home () {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
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
        <div style={{textAlign: 'center', color: 'white', fontSize: '3rem', fontWeight: 'bolder', lineHeight: '50px'}}>
          <h1>All Your Investments.</h1>
          <h1>One App. Total Control.</h1>
          
        </div>
        <p style={{textAlign: 'center', color: '#363434', marginTop: '30px', fontWeight: 'bold'}}>Aggregate all your investments in one app and gain valuable insights through detailed analysis.</p>

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
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}
