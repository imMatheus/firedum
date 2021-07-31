import { fs } from './firebase'
import firebase from 'firebase/app'
import getRandomString from './utils/getRandomString'
export function addition(a: number, b: number) {
    return a + b
}

export function firestore(
    fsReference: firebase.firestore.CollectionReference,
    numberOfItems?: number
) {
    numberOfItems = numberOfItems || 1
    fsReference.add({ name: getRandomString(5) })
}
firestore(fs.collection('test'))

console.log(getRandomString(5))

// fs.collection('test').add({ name: getRandomString(5) })

console.log('ggggg')
