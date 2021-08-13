// TODO
// storage
// querys
// faker.js
import firebase from 'firebase/app'
import getRandomNumber from '../utils/getRandomNumber'
import getRandomString from '../utils/getRandomString'
import fakerCatagories from '../faker'
import app, { auth, fs } from '../initFirebase'
interface Props {
    amountOfUsers?: number
    fields?: { [key: string]: any }
    collectionReference?: firebase.firestore.CollectionReference
}

/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} userFields - Object storing additional data about each added user
 * @param {CollectionReference} usersCollectionReference - a reference to a users collection to store additional data about user
 * @returns {Object} {data, ids, collectionReference }
 */

export default async function firedumCreateUser({
    amountOfUsers = 1,
    fields,
    collectionReference,
}: Props) {
    if (!app) {
        throw new Error(
            `firedumCreatUser requires that you have initialized your app to firedum. 
            To do this, follow the following instructions:
            1. import firedum from "firedum"
            2. call firedum the firedum with your firebase app as its argument, e.g firedum(app)
            
            `
        )
    }
    if (!auth)
        throw new Error(
            'You app has not been initialized with firedum or you have not initialized authentication for your app'
        )
    let data: any = []
    let ids: string[] = []
    for (let i = 0; i < amountOfUsers; i++) {
        const password = getRandomString(16)
        const email = getRandomString(12) + '@' + getRandomString(12) + '.com'

        try {
            await auth.createUserWithEmailAndPassword(email, password).then(async (currentUser) => {
                if (fields && currentUser && collectionReference) {
                    for (const field in fields) {
                        let value = fakerCatagories.firstName()
                        if (fields[field].split(':').length > 1) {
                            value = await fakerCatagories[fields[field].split(':')[1]]()
                            fields[field] = value
                        } else if (!fields[field]) {
                            if (fakerCatagories[field]) {
                                if (fakerCatagories[field]()) {
                                    value = await fakerCatagories[field]()
                                }
                            }

                            fields[field] = value
                        }
                    }

                    data.push({
                        password: password,
                        email: email,
                        ...fields,
                    })
                    if (currentUser?.user?.uid) {
                        ids.push(currentUser.user.uid)
                        collectionReference.doc(currentUser.user.uid).set({
                            password: password,
                            email: email,
                            ...fields,
                        })
                    }
                }
            })
        } catch (error) {
            console.error(error)
            return error
        }
    }

    return { data, ids, reference: collectionReference }
}
