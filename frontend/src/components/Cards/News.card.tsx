import React, { useEffect, useState } from 'react'
import { Box, Text, Image, Link, Grid, Spinner, Flex } from '@chakra-ui/react'
import axios from 'axios'

interface INewsCardInterface {
  item: any
  index: number
}

export default function NewsCard (props: INewsCardInterface) {
  return (
    <Box
      key={props.index}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='0 4px 12px rgba(255, 255, 255, 0.2)'
      bg='#f0f3f4'
      transform='scale(1)' // Default scale
      transition='transform 0.3s ease-in-out' // Smooth transition
      _hover={{
        transform: 'scale(0.95)' // Zoom out effect on hover
      }}
    >
      <Image
        src={
          props?.item?.img ||
          'https://images.pexels.com/photos/8471810/pexels-photo-8471810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
        alt={props?.item?.title}
        objectFit='cover'
        width='100%'
        height='200px'
      />
      <Box p={4}>
        <Text fontWeight='bold' fontSize='lg' mb={2}>
          {props?.item?.title}
        </Text>
        <Text fontSize='sm' color='gray.600'>
          {props?.item?.source} | {props?.item?.overall_sentiment_label} |{' '}
          {props?.item?.overall_sentiment_score}
        </Text>
        <Link
          href={props?.item?.url}
          color='teal.500'
          fontWeight='bold'
          // isExternal
          mt={4}
          display='block'
        >
          Read More
        </Link>
      </Box>
    </Box>
  )
}
