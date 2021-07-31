import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: 'AIzaSyA3aMd0oKHH1vCN3OxEugzVwJhtfN2D2PQ',
    authDomain: 'firedum-testing.firebaseapp.com',
    databaseURL: 'https://firedum-testing-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'firedum-testing',
    storageBucket: 'firedum-testing.appspot.com',
    messagingSenderId: '575721810932',
    appId: '1:575721810932:web:175ec24b0619926abca7a1',
})

export const fs = firebase.firestore()
export const auth = app.auth()
export const db = app.database()

export default app
