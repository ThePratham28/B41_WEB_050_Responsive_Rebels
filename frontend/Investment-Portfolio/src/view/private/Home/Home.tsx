import Footer from '@/components/LandingPage/Footer'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'

export default function Home () {
  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Navbar />
        <div style={{ flex: '1' }}>
        </div>
        <Footer />
      </div>
    </>
  )
}
