import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import { useState } from 'react'
import { DASHBOARD } from '../lib/routes'
import { useToast } from '@chakra-ui/react'
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
                title:'You are Logged In',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top",
            })
            navigate(redirectTo)
        }catch(error){
            toast({
                title: 'Login Failed',
                status: 'error',
                description: error.message,
                position: 'top',
                duration: 5000,
                isClosable: true,
            })
            return false

        }


        setLoading(false)
        return(true)
    }


    return{login, isLoading}
}