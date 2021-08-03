import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyClWTsJ3jIfMbDEfGHJCFagefp8bDagYZA',
    authDomain: 'firedum-bb.firebaseapp.com',
    projectId: 'firedum-bb',
    storageBucket: 'firedum-bb.appspot.com',
    messagingSenderId: '393856153273',
    appId: '1:393856153273:web:cfc20368cc44867e490d68',
})

export const fs = firebase.firestore()
export const auth = app.auth()
export const db = app.database()

export default app
