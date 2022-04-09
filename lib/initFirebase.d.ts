import { Auth } from 'firebase/auth';
import { Database } from 'firebase/database';
import { Firestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
declare let auth: Auth;
declare let db: Database;
declare let fs: Firestore;
declare let app: FirebaseApp;
export default function firedum(application: FirebaseApp): void;
export { app, auth, db, fs };
//# sourceMappingURL=initFirebase.d.ts.map