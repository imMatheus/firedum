// TODO
// storage
// querys
// faker.js
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

export default async function firedumCreateUser({
    amountOfUsers = 1,
    userFields,
    usersCollectionReference,
}: Props) {
    let users: { email: string; password: string }[] = []
    for (let i = 0; i < amountOfUsers; i++) {
        const password = getRandomString(16)
        const email = getRandomString(12) + '@' + getRandomString(12) + '.com'
        users.push({ email, password })
    }
    await Promise.all(
        users.map(async (data: { email: string; password: string }) => {
            const email = data.email
            const password = data.password

            try {
                auth.createUserWithEmailAndPassword(email, password)
            } catch (error) {
                return error
            }
            if (userFields) {
                let data: { [key: string]: any } = {}
                for (const field in userFields) {
                    // if the field has a truthy value wh don't change it
                    if (userFields[field]) {
                        data[field] = userFields[field]
                    } else {
                        let fieldType = typeof userFields[field] // get the typeof the value
                        let value: string | number = getRandomString(5) // defaults to a string
                        if (fieldType === typeof 1) value = getRandomNumber(4)
                        else if (fieldType === typeof '') value = getRandomString(5)

                        data[field] = value // overwrite teh previus value with the new random value
                    }
                }
                console.log(typeof fs.collection('users'))

                if (
                    usersCollectionReference &&
                    typeof usersCollectionReference === typeof fs.collection('users')
                ) {
                    usersCollectionReference.add({
                        password: password,
                        email: email,
                        ...data,
                    })
                } else {
                    fs.collection('users').add({
                        password: password,
                        email: email,
                        ...data,
                    })
                }
            }
        })
    )

    console.log('end of run')
}
