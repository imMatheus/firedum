import firebase from 'firebase/app'

interface Props {
    collectionReference: firebase.firestore.CollectionReference
    fields: { [key: string]: any }
}

/**
 *
 * @param collectionReference
 * @param fields
 */
export default async function firedumUpdate({ collectionReference, fields }: Props) {
    await collectionReference.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            collectionReference.doc(doc.id).update({ ...fields })
        })
    })
}
