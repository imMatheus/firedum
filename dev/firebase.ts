import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyClWTsJ3jIfMbDEfGHJCFagefp8bDagYZA',
	authDomain: 'firedum-bb.firebaseapp.com',
	projectId: 'firedum-bb',
	storageBucket: 'firedum-bb.appspot.com',
	messagingSenderId: '393856153273',
	appId: '1:393856153273:web:cfc20368cc44867e490d68'
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const fs = getFirestore(app);

export default app;
