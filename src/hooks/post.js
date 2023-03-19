import {useState} from 'react'
import { uuidv4 } from '@firebase/util'
import { db } from '../lib/firebase'
import { collection, query, doc, setDoc } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'


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
        setLoading(false)
    }


    return{addPost, isLoading}
}

export const usePosts = () => {
    const q = query(collection(db, 'posts'))
    const [posts, isLoading, error] = useCollectionData(q)

    if(error) throw error
    return { posts, isLoading}

}