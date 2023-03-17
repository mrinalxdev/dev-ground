import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import { useState } from 'react'
import { DASHBOARD } from '../lib/routes'

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

    const login = async({email, password, redirectedTo=DASHBOARD}) => {
        setLoading(true)

        await signInWithEmailAndPassword(auth, email, password)

        setLoading(false)
    }


    return{login, isLoading}
}