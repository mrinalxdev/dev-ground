import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import { useState } from 'react'
import { DASHBOARD } from '../lib/routes'
import { useToast} from '@chakra-ui/react'
// import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {

    const [authUser, isLoading, error ] = useAuthState(auth)

    return {
        user: authUser, 
        isLoading,
        error
    }
}

export const useLogin = () => {
    const [isLoading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()


    const login = async({email, password, redirectTo=DASHBOARD}) => {
        setLoading(true)

        try{
            await signInWithEmailAndPassword(auth, email, password)
            toast({
                duration: 5000,
                isClosable: true,
                position: "top",
                // render: () => (
                //     <Box color='white' p={3} bg='black.500'>
                //         <h1>Login Successfull</h1>
                //     </Box>
                // ),
                title: 'Login Successfull',
            })
            navigate(redirectTo)
        }catch(error){
            toast({
                description: error.message,
                position: 'top',
                duration: 1000,
                isClosable: true,
                // render: () => (
                //     <Box color='red.500' p={3} bg='black.500' borderWidth={4} textAlign='center' borderRadius={2}>
                //         <h1>Login Failed</h1>
                //     </Box>
                // ),
                title: 'Login Failed',
            })
            return false

        }


        setLoading(false)
        return(true)
    }


    return{login, isLoading}
}