import React from 'react'
import { Box, Text  } from '@chakra-ui/react'
import  Header  from './Header'


const Post = ({post}) => {
    const { uid, text } = post


  return (
    <Box p='2' maxw='400px' mt='6' borderRadius='xl'>
        <Box border='6px solid' borderColor='grey.100' borderRadius='sm' borderRadius='xl'>
            <Header uid={uid} />

            <Box px='2' minH='200px' minW='400px' borderRadius='xl'>
                <Text wordBreak='break-word' fontSize='md'>
                    {text}
                </Text>
            </Box>

        </Box>
    </Box>
  )
}

export default Post