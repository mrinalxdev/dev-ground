import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { auth, db } from '../lib/firebase'
import { useState } from 'react'
import { DASHBOARD } from '../lib/routes'
import { useToast} from '@chakra-ui/react'
import { LOGIN } from '../lib/routes'
// import { Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { setDoc, doc } from 'firebase/firestore'
import { isUsernameExist } from '../utils/isUserNameExist'

export const useAuth = () => {

    const [authUser, isLoading, error ] = useAuthState(auth)

    return {
        user: authUser, 
        isLoading,
        error
    }
}

export const useRegister = () => {
    const [isLoading, setLoading] = useState(false)
    const toast = useToast()
    const navigate = useNavigate()

    setLoading(true)

    const register = async({username, email, password, redirectTo = DASHBOARD}) => {
        setLoading(true)

        const userNameExist = isUsernameExist(username)

        if(username) {
            toast({
                title: 'Username Already Exist',
                isClosable: true,
                position:'top',
                duration: 1200,
            })
            setLoading(false)
            return false
        }else {
            try{
                const res = await createUserWithEmailAndPassword(auth, email, password)
                await setDoc(doc(db, 'users', res.user.uid), {
                    id: res.user.id,
                    username: username,
                    avatar : "",
                    Date: Date.now(),
                })

                toast({
                    title: 'Registered',
                    isClosable: true,
                    position:'top',
                    duration: 1200,
                })
                navigate(redirectTo)

            } catch( error) {

                toast({
                    title: 'fail',//Username failed
                    isClosable: true,
                    position:'top',
                    duration: 1200,
                })

            }
        }

        setLoading(false)

    }

    
    return {register, isLoading}
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


export const useLogout = () => {
    const [ signOut, isLoading, error ] = useSignOut(auth)
    const toast = useToast()
    const navigate = useNavigate()
    
    const logout = async() => {
        if(await signOut()) {
            toast({
                title: 'Logged Out',
                isClosable: true,
                postion:'top',
                duration:1200,
            })
            navigate(LOGIN)
        }
    }
    return {logout, isLoading}
}