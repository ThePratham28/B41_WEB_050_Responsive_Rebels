import {
    Box,
    Flex,
    HStack,
    Image,
    Input,
    Button,
    VStack,
    Text,
  } from '@chakra-ui/react'
  import React from 'react'
  import LogoImage from '../../assets/LogoFinal.png'
  
  export default function ForgotPassword() {
    return (
      <>
        <Box
          p={4}
          bg="#f9f9f9"
          height={'100vh'}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            spacing={6}
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="lg"
            maxW="400px"
            w="full"
          >
            <Box textAlign="center">
              <Text fontSize="2xl" fontWeight="bold" color="gray.700">
                Forgot Password
              </Text>
              <Text fontSize="sm" color="gray.600" mt={2}>
                Enter your email address and we’ll send you a link to reset your
                password.
              </Text>
            </Box>
            {/* Form */}
            <Box as="form" w="full">
              <Input
                type="email"
                placeholder="Enter your email"
                mb={4}
                focusBorderColor="blue.500"
                borderColor="gray.300"
              />
              <Button
                type="submit"
                colorScheme="blue"
                w="full"
                mt={4}
                fontWeight="medium"
              >
                Send Reset Link
              </Button>
            </Box>
          </VStack>
        </Box>
      </>
    )
  }
  