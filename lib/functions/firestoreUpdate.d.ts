import firebase from 'firebase/app';
interface firestoreAddProps {
    collectionReference: firebase.firestore.CollectionReference;
    fields?: {
        [key: string]: any;
    };
    item?: {};
    numberOfItems?: number;
}
export default function firestoreUpdate({ collectionReference, fields, item, numberOfItems, }: firestoreAddProps): void;
export {};
//# sourceMappingURL=firestoreUpdate.d.ts.map