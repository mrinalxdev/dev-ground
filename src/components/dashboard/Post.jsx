import React from 'react'
import {HStack, Heading, Button, Box} from '@chakra-ui/react'

const Post = () => {
  return (
    <Box maxW='600px' mx='auto' py='10'>
        <form>
            <HStack justify='space-between'>
                <Heading size='md'>
                    New Post
                </Heading>
                <Button type='submit' colorScheme='teal'>
                    Post
                </Button>
            </HStack>
        </form>
    </Box>
  )
}

export default Post