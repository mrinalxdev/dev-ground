import React from 'react'
import { Box, Text  } from '@chakra-ui/react'

const Post = ({post}) => {
    const { text } = post


  return (
    <Box p='2' maxw='600px'>
        <Box border='3px solid' borderColor='grey.100' borderRadius='sm'>

            <Box px='2' minH='100px' minW='400px'>
                <Text wordBreak='break-word' fontSize='md'>
                    {text}
                </Text>
            </Box>

        </Box>

    </Box>
  )
}

export default Post