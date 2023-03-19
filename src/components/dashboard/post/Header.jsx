import React from 'react'

import { Flex, Button, Text, Box } from '@chakra-ui/react'

const Header = ({uid}) => {
  return (
    <Flex alignItems='center' borderBottom='2px solid' borderColor='teal.100' p='3' bg='grey.50' borderTopRadius='xl'>
        
        <Box>
            <Button colorScheme='teal' variant='link'>
                userName
            </Button>
            <Text fontSize='sm' color='grey.500'>
                3h Ago
            </Text>
        </Box>

    </Flex>


  )
}

export default Header