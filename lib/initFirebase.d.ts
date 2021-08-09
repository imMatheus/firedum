import firebase from 'firebase/app';
declare let auth: firebase.auth.Auth;
declare let db: firebase.database.Database;
declare let fs: firebase.firestore.Firestore;
declare let app: firebase.app.App;
export default function firedum(application: firebase.app.App): void;
export { app, auth, db, fs };
//# sourceMappingURL=initFirebase.d.ts.map