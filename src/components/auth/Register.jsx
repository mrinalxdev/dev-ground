import React from 'react'
import { Center, Box, Heading, Input, FormLabel, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { LOGIN } from '../../lib/routes'

const Register = () => {
  return (
    <Center w="100%" h="100vh">
      <Box mx="3" maxW="xl" borderWidth="1px" p="10" borderRadius="lg">
        <Heading mb="4" size="lg" textAlign="center">
            Register
        </Heading>

        <form onSubmit={() => {}}>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter Your Email' />
                    <FormErrorMessage>Invalid email for Authentication </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter Your password' />
                    <FormErrorMessage>Invalid email for Authentication </FormErrorMessage>
                </FormControl>

                <button className="bg-cyan-700 mt-2 px-4 py-2 w-full rounded-lg duration-150 ease-out hover:bg-cyan-400">Login</button>
        </form>

        <p className="mt-6"><Link to={LOGIN} className='font-bold text-cyan-900 hover:text-cyan-400'>Login</Link>
          {" "} Do you have an Account then Login</p>
      </Box>
    </Center>
  )
}

export default Register