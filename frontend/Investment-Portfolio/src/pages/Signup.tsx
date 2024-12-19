import React, { useState } from 'react'
import { Input, Button, Flex, Image } from '@chakra-ui/react'
import StockImage from '../assets/signup.png'
import { useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'

const Signup: React.FC = () => {
  const navigate = useNavigate()

  const [data, setData] = useState<any>()

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // api call
  }

  return (
    <>
      <Flex px={10}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            textAlign: 'center',
            marginRight: 20
          }}
        >
          <Image src={StockImage} objectFit='contain' h='80%' w='80%' />
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              gap: 50
            }}
          >
            <h1
              style={{ fontWeight: 'bolder', fontSize: 35, color: '#1a3478' }}
            >
              Create Your Account
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                type='email'
                id='email'
                name='email'
                onChange={handleChangeValue}
                placeholder='Email'
                mb={'3'}
                w = {"90%"}
              />
              <Input
                type='password'
                id='password'
                name='password'
                onChange={handleChangeValue}
                placeholder='Password'
                w = {"90%"}
              />
              <Button
                type='submit'
                mt={5}
                w={'100%'}
                color={'white'}
                bg={'blue.800'}
              >
                Sign up
              </Button>
            </form>
            <div style={{ marginTop: 3 }}>
              <span style={{ textAlign: 'center', color: '#3b82f6' }}>
                Already have an account?{' '}
                <span
                  style={{ color: '#1a3478', cursor: 'pointer' }}
                  onClick={() => navigate('/login')}
                >
                  Login
                </span>
              </span>
            </div>
            <Flex gap={5}>
              <FaGoogle />
              <FaFacebook />
              <BsTwitterX />
            </Flex>
          </div>
        </div>
      </Flex>
    </>
  )
}

export default Signup
