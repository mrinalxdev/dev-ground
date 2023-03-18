import React from 'react'
import { Center, Box, Heading, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRegister } from '../../hooks/auth'
import { userNameValidate, emailValidate, passwordValidate } from '../../utils/form-validate'
import { DASHBOARD, LOGIN } from '../../lib/routes'

const Register = () => {
    const {registerUser, isLoading} = useRegister()
    const { register, handleSubmit, reset } = useForm()

    const handleRegister = async(data) => {
        registerUser({
            username: data.username,
            email: data.email,
            password: data.password,
            redirectTo: DASHBOARD,
        })
    }

  return (
    <Center w='100%' h='100vh'>
        <Box mx="3" maxW="xl" p="9" borderWidth="1px" borderRadius="lg">
            <Heading mb="4" size="lg" textAlign="center">
                Register
            </Heading>

            <form onSubmit={handleSubmit(handleRegister)}>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Username</FormLabel>
                    <Input type='text' placeholder='Enter Your username'{...register('email', emailValidate)}/>
                    <FormErrorMessage>Invalid username for Authentication </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={false} py="2">
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Enter Your Email' {...register('email', emailValidate)} />
                    <FormErrorMessage>Invalid email for Authentication </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={true} py="2">
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder='Enter Your password' {...register('password', passwordValidate)} />
                    <FormErrorMessage>Invalid password for Authentication </FormErrorMessage>
                </FormControl>

                <button className="bg-cyan-700 mt-2 px-4 py-2 w-full rounded-lg duration-150 ease-out hover:bg-cyan-400">Register</button>
            </form>

            <p><Link to={LOGIN} className='font-bold text-cyan-900 hover:text-cyan-400'>Login</Link>
             {" "}  If you have an account </p>
        </Box>
    </Center>
  )
}

export default Register
