import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCdZLYvx4VR46s0xJQkKdlrBGFz7i7_Sxw',
	authDomain: 'chatter-dev-90e58.firebaseapp.com',
	projectId: 'chatter-dev-90e58',
	storageBucket: 'chatter-dev-90e58.appspot.com',
	messagingSenderId: '1038342586432',
	appId: '1:1038342586432:web:0383bbd4747f0094689fa5'
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const fs = getFirestore(app);

export default app;
