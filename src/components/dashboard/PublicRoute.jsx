import React from 'react'
import { Center, Box, Heading, Button } from '@chakra-ui/react' 
import {LOGIN} from '../../lib/routes'
import { Link } from 'react-router-dom'

const PublicRoute = () => {
  return (
    <Box>
        <Center w='100%' h='100vh'>
          <Box justify='space-between'>
            <Heading>Submission For CodeFest</Heading>

            <Heading size='sm'>
            For Loggin In Email : usertest@gmail.com Password : mrinal123
          </Heading>
              

          </Box>
          <Link to={LOGIN} className='mx-auto text-center p-2 rounded-lg bg-cyan-700'>
                  Login
              </Link>

          
            
        </Center>
    </Box>
  )
}

export default PublicRoute