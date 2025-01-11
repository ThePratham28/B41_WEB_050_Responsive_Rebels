import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const FlipCard = ({children}) => {
  return (
    <Box
      perspective="1000px"
      width="300px"
      height="200px"
      mx="auto"
      my={10}
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        transformStyle="preserve-3d"
        transition="transform 0.6s"
        _hover={{ transform: "rotateY(180deg)" }}
      >
        {/* Front Side */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backfaceVisibility="hidden"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="teal.500"
          color="white"
          fontSize="xl"
          fontWeight="bold"
          borderRadius="md"
          boxShadow="lg"
        >
          Hover over me!
        </Box>

        {/* Back Side */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg="purple.500"
          color="white"
          fontSize="lg"
          fontWeight="bold"
          borderRadius="md"
          boxShadow="lg"
        >
         {children}
        </Box>
      </Box>
    </Box>
  );
};

export default FlipCard;


