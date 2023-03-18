import { query, collection, where, getDocs} from 'firebase/firestore'
import { db } from '../lib/firebase'

export const isUsernameExist = async(username) => {
    const q = query(collection(db, 'users'), where('username', '==', username))

    const querySnapshot = await getDocs(q)
    return querySnapshot.size > 0
}