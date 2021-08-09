import firebase from 'firebase/app'

let auth: firebase.auth.Auth
let db: firebase.database.Database
let fs: firebase.firestore.Firestore
let storage: firebase.storage.Storage
let app: firebase.app.App

export default function firedum(application: firebase.app.App) {
    fs = application.firestore()
    auth = application.auth()
    db = application.database()
    // storage = firebase.storage()
    app = application
}

export { app, auth, db, fs }
