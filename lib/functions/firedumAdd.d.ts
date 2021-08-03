import firebase from 'firebase/app';
interface Props {
    collectionReference: firebase.firestore.CollectionReference;
    fields: {
        [key: string]: any;
    };
    numberOfDocuments?: number;
    documents?: any[];
}
/**
 * @param {collectionReference} collectionReference - reference to a firestore collection.
 * @param {Object} fields - the fields to be added to each document
 * @param {Object} numberOfDocuments - the number of documents to be added th teh collection
 * @param {Array<Object>} documents - if passed, firedum will add all of the documents given and ignores the numberOfDocuments variable
 * @returns
 */
export default function firedumAdd({ collectionReference, fields, numberOfDocuments, // default is 1
documents, }: Props): Promise<any>;
export {};
//# sourceMappingURL=firedumAdd.d.ts.map