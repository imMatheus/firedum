import firebase from 'firebase/app'
import getRandomNumber from '../utils/getRandomNumber'
import getRandomString from '../utils/getRandomString'

interface firestoreAddProps {
    collectionReference: firebase.firestore.CollectionReference
    fields: { [key: string]: any }
}

export default function firestoreUpdate({ collectionReference, fields }: firestoreAddProps) {
    collectionReference.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            collectionReference.doc(doc.id).update({ ...fields })
        })
    })
}
