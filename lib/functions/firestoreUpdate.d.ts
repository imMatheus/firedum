import firebase from 'firebase/app';
interface firestoreAddProps {
    collectionReference: firebase.firestore.CollectionReference;
    fields: {
        [key: string]: any;
    };
}
export default function firestoreUpdate({ collectionReference, fields }: firestoreAddProps): void;
export {};
//# sourceMappingURL=firestoreUpdate.d.ts.map