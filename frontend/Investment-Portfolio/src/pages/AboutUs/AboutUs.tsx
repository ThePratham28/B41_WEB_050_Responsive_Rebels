import Footer from '@/components/LandingPage/Footer'
import Navbar from '@/components/LandingPage/Navbar'
import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import anime from '../../Animation/one-team-one-direction.json'
import Lottie from 'react-lottie'
import FlipCard from '@/components/Cards/FlicpCard'
import anime1 from '../../Animation/male-developer-working-on-laptop.json'
import anime2 from '../../Animation/girl-working-with-laptop.json'
import anime3 from '../../Animation/boy-coding-on-laptop.json'
import moneyPlant from '../../assets/moneyPlant.png'

export default function AboutUs () {
  const navigate = useNavigate()

  const animated = {
    loop: true,
    autoplay: true,
    animationData: anime,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const animated1 = {
    loop: true,
    autoplay: true,
    animationData: anime1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const animated2 = {
    loop: true,
    autoplay: true,
    animationData: anime2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  const animated3 = {
    loop: true,
    autoplay: true,
    animationData: anime3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'white'
      }}
    >
      {/* Navbar Section */}
      <Box>
        <Navbar />
      </Box>

      {/* About Section */}
      <Box flex={1} py={10} px={{ base: 4, md: 10 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='space-between'
        >
          {/* Left Text Section */}
          <Box flex={1} maxW='50%' textAlign={{ base: 'center', md: 'left' }}>
            <Text fontSize='4xl' fontWeight='bold' mb={8}>
              Empowering People to Become Better Investors
            </Text>
            <Text fontSize='md' color='gray.600' mb={8}>
              Welcome to the Investment Portfolio Tracker, a web application
              crafted with precision and passion by a dedicated team of three
              from Masai. As part of our journey to hone advanced technical
              skills and build industry-ready projects, we created this platform
              during our intensive training.
            </Text>
          </Box>

          {/* Right Image Section */}
          <Box
            flex={1}
            maxW='30%'
            display='flex'
            justifyContent={{ base: 'center', md: 'flex-end' }}
            mt={{ base: 8, md: 0 }}
          >
            <Image
              src='https://img.freepik.com/free-photo/staff-meeting-group-young-modern-people-smart-casual-wear-discussing-something-while-working-creative-office-business-time_496169-1626.jpg'
              alt='Team'
              borderRadius='md'
              objectFit='cover'
              maxH='400px'
              boxShadow='md'
            />
          </Box>
        </Flex>
      </Box>

      {/* Features Section */}
      <Box flex={1}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='space-between'
          h={500}
        >
          {/* Left Text Section */}
          <Box
            flex={1}
            maxW='50%'
            p={10}
            textAlign={{ base: 'center', md: 'left' }}
            bg='black'
            color='white'
            h={'100%'}
          >
            <Text fontSize='4xl' fontWeight='bold' mb={8}>
              Features
            </Text>
            <Text fontSize='md' mb={8}>
              Our application is designed to simplify investment tracking for
              users, featuring:
            </Text>
            <ul style={{ marginLeft: '20px', textDecoration: 'bullet' }}>
              <li>
                <b>Login and Signup Pages:</b> Ensuring secure access to your
                personalized portfolio.
              </li>
              <li>
                <b>Portfolio Dashboard:</b> A user-friendly interface to manage
                and monitor your investments effortlessly.
              </li>
              <li>
                <b>Stock Forum:</b> A community hub for investors to discuss,
                share insights, and stay updated.
              </li>
              <li>
                <b>Integration with Alpha Vantage API:</b> Providing real-time
                market data for informed decision-making.
              </li>
              <li>
                <b>Data Visualization:</b> Gain insights into your investments
                and transactions through interactive charts.
              </li>
            </ul>
          </Box>

          {/* Right Image Section */}
          <Box
            flex={1}
            maxW='50%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            // px={4}
            h={'100%'}
          >
            <Image
              src={moneyPlant}
              alt='Features'
              // borderRadius='md'
              objectFit='cover'
              width='80%'
              height='80%'
              // height='auto'
              // maxH='600px'
              // boxShadow='md'
            />
          </Box>
        </Flex>
      </Box>

      {/* Meet Our Team */}
      <Box flex={1}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='space-between'
          h={500}
        >
          {/* Right Image Section */}
          <Box
            flex={1}
            maxW='50%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            // px={4}
            h={'100%'}
          >
            <div style={{ flex: '1' }}>
              <Lottie
                options={animated}
                height={500}
                width={600}
                // box-shadow: rgb(0, 0, 56) 0px 22px 70px 4px;
                style={{
                  // boxShadow: 'rgb(186, 186, 240) 0px 22px 70px 10px',
                  marginTop: '100px',
                  marginBottom: '100px'
                  // boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset'
                }}
              />
            </div>
          </Box>
          {/* Left Text Section */}
          <Box
            flex={1}
            maxW='50%'
            p={10}
            // textAlign={{ base: 'center', md: 'left' }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
            bg='black'
            color='white'
            h={'100%'}
          >
            <Text fontSize='4xl' fontWeight='bold' mb={8} textAlign='center'>
              Meet Our Team
            </Text>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Member 1 */}
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '20px',
                  width: '100%'
                }}
              >
                <h5 style={{ fontWeight: 'bold' }}>Pratham Chopde</h5>
                <p>Unit- 4</p>
                <p>Backend Developer</p>
                <hr style={{ width: '70%', margin: '10px auto' }} />
              </div>

              {/* Member 2 */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '100px' }}>
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    width: '100%'
                  }}
                >
                  <h5 style={{ fontWeight: 'bold' }}>Aakanksha Kumari</h5>
                  <p>Unit- 4</p>
                  <p>Frontend Developer</p>
                  {/* <hr style={{ width: '70%', margin: '10px auto' }} /> */}
                </div>

                {/* Member 3 */}
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    width: '100%'
                  }}
                >
                  <h5 style={{ fontWeight: 'bold' }}>Siddharth Khare</h5>
                  <p>Unit- 5</p>
                  <p>Frontend Developer</p>
                  {/* <hr style={{ width: '70%', margin: '10px auto' }} /> */}
                </div>
              </div>
              <hr style={{ width: '70%', margin: '10px auto' }} />
            </div>
          </Box>
        </Flex>
      </Box>

      <div style={{ margin: '50px 0', padding: '0 20px' }}>
        <p style={{ textAlign: 'center', fontSize: '20px' }}>
          This project reflects our commitment to leveraging modern technologies
          like React for dynamic UI development and MongoDB for robust backend
          management. It’s more than a project—it’s a testament to our learning
          and growth.
        </p>
        <p
          style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}
        >
          Thank you for visiting our platform, and we hope it meets your
          expectations!
        </p>
      </div>

      <Footer />
    </div>
  )
}
