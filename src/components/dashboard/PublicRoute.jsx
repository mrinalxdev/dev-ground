import React from 'react'
import { Center, Box, Heading, Button } from '@chakra-ui/react' 
import {LOGIN} from '../../lib/routes'
import { Link } from 'react-router-dom'

const PublicRoute = () => {
  return (
    <Box>
        <Center w='100%' h='100vh' justify='space-between'>
            <Heading>Submission For CodeFest</Heading>

            <Heading size='sm'>
              For Multiple Users Please Login using : 

              email : usertest@gmail.com
              password : user1234

              email : usertest1@gmail.com
              password : user1234

              email : usertest2@gmail.com
              password : user1234

              email : usertest3@gmail.com
              password : user1234
            </Heading>

            
              <Link to={LOGIN}>
                  Login
              </Link>
            
        </Center>
    </Box>
  )
}

export default PublicRoute