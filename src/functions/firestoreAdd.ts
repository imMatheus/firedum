import firebase from 'firebase/app'
import getRandomNumber from '../utils/getRandomNumber'
import getRandomString from '../utils/getRandomString'

interface firestoreAddProps {
    collectionReference: firebase.firestore.CollectionReference
    fields?: { [key: string]: any }
    item?: {}
    numberOfItems?: number
}

export default function firestoreAdd({
    collectionReference,
    fields,
    item,
    numberOfItems = 1, // default is 1
}: firestoreAddProps) {
    if (!fields && !item) throw new Error('please provide at least item fields or an item object')

    let data: { [key: string]: any } = {}
    for (const field in fields) {
        if (fields[field]) {
            data[field] = fields[field]
        } else {
            let fieldType = typeof fields[field]
            let value: string | number = getRandomString(5)
            if (fieldType === typeof 1) value = getRandomNumber(4)
            else if (fieldType === typeof '') value = getRandomString(5)

            data[field] = value
        }
    }

    for (let i = 0; i < numberOfItems; i++) {
        collectionReference.add(item || data)
    }
}
