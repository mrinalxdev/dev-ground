import {useState} from 'react'
import { uuidv4 } from '@firebase/util'
import { db } from '../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'


export const useAddPost = () => {
    const [isLoading, setLoading] = useState(false)

    const addPost = async(post) => {
        setLoading(true)
        const id = uuidv4()

        await setDoc(doc(db, 'posts', id), {
            ...post,
            id,
            date: Date.now(),
            likes: [],
        })
    }


    return{addPost, isLoading}
}