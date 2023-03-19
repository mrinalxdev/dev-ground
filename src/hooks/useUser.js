import { useDocumentData } from 'react-firebase-hooks/firestore'
import { doc, query } from 'firebase/firestore'
import { db } from '../lib/firebase'

export const useUser = (number) => {

    const q = query(doc(db, 'users', number))
    const [user, isLoading] = useDocumentData(q)
    return{user, isLoading}

}