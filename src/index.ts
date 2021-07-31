import { fs } from './firebase'
import firebase from 'firebase/app'
import getRandomString from './utils/getRandomString'

interface firestoreAddProps {
    collectionReference: firebase.firestore.CollectionReference
    fields?: {}
    item?: {}
    numberOfItems?: number
}

export function firestoreAdd({
    collectionReference,
    fields,
    item,
    numberOfItems,
}: firestoreAddProps) {
    numberOfItems = numberOfItems || 1
    let data = {}
    for (const field in fields) {
        console.log(field)
        data = {
            ...data,
            [field]: getRandomString(5),
        }
    }
    for (let i = 0; i < numberOfItems; i++) {
        collectionReference.add(data)
    }
}

const fields = { firstName: '', lastName: '', age: 0 }
const OPTIONS = {
    collectionReference: fs.collection('test'),
}
firestoreAdd(OPTIONS)

// fs.collection('test').add({ name: getRandomString(5) })
