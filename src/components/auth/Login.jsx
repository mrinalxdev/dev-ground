import React from 'react'
import { Center, Box, Heading, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useLogin } from '../../hooks/auth'
import { emailValidate, passwordValidate } from '../../utils/form-validate'
import { REGISTER, DASHBOARD } from '../../lib/routes'

const Login = () => {
    const {login, isLoading} = useLogin()
    const { register, handleSubmit, reset } = useForm()

    const handleLogIn = async(data) => {
        login({
            email: data.email,
            password: data.password,
            redirectTo: DASHBOARD,
        })
    }

  return (
    <Center w='100%' h='100vh'>
        <Box mx="3" maxW="xl" p="9" borderWidth="1px" borderRadius="lg">
            <Heading mb="4" size="lg" textAlign="center">
                Log In
            </Heading>

            <form onSubmit={handleSubmit(handleLogIn)}>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter Your Email' {...register('email', emailValidate)} />
                    <FormErrorMessage>Invalid email for Authentication </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter Your password' {...register('password', passwordValidate)} />
                    <FormErrorMessage>Invalid password for Authentication </FormErrorMessage>
                </FormControl>

                <button className="bg-cyan-700 mt-2 px-4 py-2 w-full rounded-lg duration-150 ease-out hover:bg-cyan-400">Login</button>
            </form>

            <p><Link to={REGISTER} className='font-bold text-cyan-900 hover:text-cyan-400'>Register</Link>
             {" "}  Form a new account in DevGround </p>
        </Box>
    </Center>
  )
}

export default Login
