import firebase from 'firebase/app';
interface Props {
    collectionReference: firebase.firestore.CollectionReference;
    fields: {
        [key: string]: any;
    };
}
export default function firedumUpdate({ collectionReference, fields }: Props): Promise<void>;
export {};
//# sourceMappingURL=firedumUpdate.d.ts.map