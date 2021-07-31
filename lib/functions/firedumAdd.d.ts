import firebase from 'firebase/app';
interface Props {
    collectionReference: firebase.firestore.CollectionReference;
    fields: {
        [key: string]: any;
    };
    numberOfItems?: number;
}
export default function firedumAdd({ collectionReference, fields, numberOfItems, }: Props): Promise<void>;
export {};
//# sourceMappingURL=firedumAdd.d.ts.map