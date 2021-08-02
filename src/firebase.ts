import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyCxcM-BfVSqN4hpXyVCUBDhEtmNZoh9IJc',
    authDomain: 'firedum-abc.firebaseapp.com',
    databaseURL: 'https://firedum-abc-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'firedum-abc',
    storageBucket: 'firedum-abc.appspot.com',
    messagingSenderId: '358780478136',
    appId: '1:358780478136:web:847958635f643547f38a4d',
})

export const fs = firebase.firestore()
export const auth = app.auth()
export const db = app.database()

export default app
