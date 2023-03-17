import React from 'react'
import { Center, Box, Heading, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { REGISTER } from '../../lib/routes'
import { DASHBOARD } from '../../lib/routes'
import { useLogin } from '../../hooks/auth'

const Login = () => {
    const {login, isLoading} = useLogin()

  return (
    <Center w='100%' h='100vh'>
        <Box mx="3" maxW="xl" p="9" borderWidth="1px" borderRadius="lg">
            <Heading mb="4" size="lg" textAlign="center">
                Log In
            </Heading>

            <form onSubmit={() => {
                console.log("Hello World")
            }}>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter Your Email' />
                    <FormErrorMessage>Invalid email for Authentication </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter Your password' />
                    <FormErrorMessage>Invalid email for Authentication </FormErrorMessage>
                </FormControl>

                <button className="bg-cyan-700 mt-2 px-4 py-2 w-full rounded-lg duration-150 ease-out hover:bg-cyan-400">Login</button>
            </form>

            <p><Link to={REGISTER} className='font-bold text-cyan-900 hover:text-cyan-400'>Register</Link>
             {" "}  Form a new account in DevGround <br /> Go to  <Link to={DASHBOARD}>Dashboard</Link></p>
        </Box>
    </Center>
  )
}

export default Login
