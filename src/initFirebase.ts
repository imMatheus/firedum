import { Auth, getAuth } from 'firebase/auth';
import { Database, getDatabase } from 'firebase/database';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';

let auth: Auth;
let db: Database;
let fs: Firestore;
let app: FirebaseApp;

export default function firedum(application: FirebaseApp) {
	fs = getFirestore(application);
	auth = getAuth(application);
	db = getDatabase(application);
	app = application;
}

export { app, auth, db, fs };
