import firebase from 'firebase/app'
import getRandomNumber from '../utils/getRandomNumber'
import getRandomString from '../utils/getRandomString'

interface Props {
    collectionReference: firebase.firestore.CollectionReference
    fields: { [key: string]: any }
    numberOfItems?: number
}

export default async function firedumAdd({
    collectionReference,
    fields,
    numberOfItems = 1, // default is 1
}: Props) {
    if (!collectionReference) throw new Error('Please provide a firestore collection reference')
    if (!fields) throw new Error('Please provide at least one field to fields')

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
        await collectionReference.add(data)
    }
}
