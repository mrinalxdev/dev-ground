
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDm2yab-ci8fjF_VXE8aP3F7nNpzVrB2TE",
  authDomain: "devground-abd18.firebaseapp.com",
  projectId: "devground-abd18",
  storageBucket: "devground-abd18.appspot.com",
  messagingSenderId: "474222088564",
  appId: "1:474222088564:web:d5e530e83f8a0bd61e1c21"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)


