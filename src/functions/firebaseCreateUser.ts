import firebase from 'firebase/app'
import getRandomNumber from '../utils/getRandomNumber'
import getRandomString from '../utils/getRandomString'
import { fs, auth } from '../firebase'

interface Props {
    amountOfUsers?: number
    userFields?: { [key: string]: any }
    usersCollectionReference?: firebase.firestore.CollectionReference
}

/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} userFields - Object storing additional data about each added user
 * @param {CollectionReference} usersCollectionReference - a reference to a users collection to store additional data about user
 * @returns
 */

// TODO
// storage
// querys
// faker.js

export default async function firedumCreateUser({
    amountOfUsers = 1,
    userFields,
    usersCollectionReference,
}: Props) {
    console.log('runner')

    // if (amountOfUsers && typeof amountOfUsers !== 'number')
    //     throw new Error('amountOfUsers is not a number ')

    console.log('started')
    for (let i = 0; i < amountOfUsers; i++) {
        const password = getRandomString(16)
        const email = getRandomString(12) + '@' + getRandomString(12) + '.com'
        try {
            await auth.createUserWithEmailAndPassword(email, password)

            if (userFields) {
                let data: { [key: string]: any } = {}
                for (const field in userFields) {
                    // if the field has a truthy value wh don't change it
                    if (userFields[field]) {
                        data[field] = userFields[field]
                    } else {
                        let fieldType = typeof userFields[field] // get the typeof the value
                        let value: string | number = getRandomString(5) // defaults to a string
                        // if it is a number
                        if (fieldType === typeof 1) value = getRandomNumber(4)
                        // if it is a string
                        else if (fieldType === typeof '') value = getRandomString(5)

                        data[field] = value // overwrite teh previus value with the new random value
                    }
                }
                if (
                    usersCollectionReference &&
                    typeof usersCollectionReference === typeof fs.collection('users')
                ) {
                    await usersCollectionReference.add({
                        password: password,
                        email: email,
                        ...data,
                    })
                } else {
                    await fs.collection('users').add({
                        password: password,
                        email: email,
                        ...data,
                    })
                }
            }
        } catch (error) {
            return error
        }
    }
    console.log('end of run')
}
