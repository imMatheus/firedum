# Firedum - an firestore package for quick testing

A package to generate customized mock data to to you firebase project quickly.
All mock data gets generated using [faker.js](https://www.npmjs.com/package/faker)
Any firedum function that can get passed fields will take all key-value pairs with a falsy value, such as a empty string, and check if the given key is a faker function. If it is, firedum will generate a value for that key with the faker function.
For more information please read [faker.js](https://www.npmjs.com/package/faker) documentation

# Installation

`npm i firedum -D`

# Usage

```js
// index.js / index.ts
import { fs } from './firebase'
import { firedumAdd } from 'firedum'

await firedumAdd({
    collectionReference: fs.collection('users'),
    fields: {
        firstName: '',
        lastName: 'Bar',
    },
    numberOfDocuments: 10,
})
```

Initialize firebase app

```js
// firebase.js / firebase.ts
import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: FIREBASE_API_KEY,
    databaseURL: FIREBASE_DATABASE_URL,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
})

export const fs = firebase.firestore()

export default app
```

# Functions

## firedumAdd

Adds new documents to a given collection

```js
import { firedumAdd } from 'firedum'

await firedumAdd({
    // a reference to a firestore collection - REQUIRED
    collectionReference: fs.collection('users'),
    fields: {
        // a lsit of fields to be added to the each document
        age: 21,
        firstName: '',
        zipCode: '',
        // NOTE that firedum uses faker.js for generating the mock data,
        // if you pass a key with a falsy value, e.g '', firedum will try generating
        // the value from what the key is, any faker.js function name can be passed as a key
        favoriteColor: ':color',
    },
    // number of items to be added to the collection - defaults to 1
    numberOfDocuments: 10,
    // if documents gets passed firedum will ignore 'numberOfDocuments' variable and only add the given documents
    documents: [
        { job: 'Teacher', salary: '$1,022' },
        { job: 'Lawyer', salary: '$1,841' },
        { job: 'Cook', salary: '$1,197' },
    ],
    // NOTE if fields gets passed along with documents all the fields will be added along side each doc,
    // any falsy value will be generated with faker
})
```

## firedumUpdate

Updates every document in a collection

```js
import { firedumUpdate } from 'firedum'

await firedumUpdate({
    // a reference to a firestore collection - REQUIRED
    collectionReference: fs.collection('users'),
    // a lsit of fields to be change to the document
    fields: {
        lastName: 'Baz', // changes the lastName property of each document to 'Baz'
        firstName: '', // will generate a random first name with faker
        age: 54, // changes the age property of each document to 54
        // NOTE if a document doesn't have a given field, firedum will add it
    },
})
```

## firedumCreateUser

Adding new users via authentication with email and password

```js
import firedum, { firedumCreateUser } from 'firedum'

// initialize your app so that firedum can access your the authentication to create new users
firedum(app)

await firedumCreateUser({
    // adds 10 new users
    amountOfUsers: 10, // defaults to 1
    // fields to be added to a users collections in firestore for each user that gets created
    fields: {
        // a lsit of fields to be added to the each document
        age: 21,
        firstName: '',
        zipCode: '',
        // NOTE that firedum uses faker.js for generating the mock data,
        // if you pass a key with a falsy value, e.g '', firedum will try generating
        // the value from what the key is, any faker.js function name can be passed as a key
    },
    // a firestore collection reference to add the user documents to
    // if this is not passed in it will default to the 'users' collection
    usersCollectionReference: fs.collection('users'),
    // NOTE that all documents created will have the id of the user that it was created for
})
```

## Nesting

If you would like to have documents with fields but also collections

The following code generates 5 documents in the users collection with a random first and last name.
Then each of the of the newly documents gets a new collection called colors,
the colors collection then gets 5 new documents with a single field, color

In total 25 documents was created

You can use this technic to nest how many collections you want, be carful tho as the number
of document writes will drastically increase the more you nest

```js
import { firedumAdd } from 'firedum'

await firedumAdd({
    collectionReference: fs.collection('users'),
    fields: {
        firstName: '',
        lastName: '',
    },
    numberOfDocuments: 5,
}).then(async ({ ids, reference }) => {
    await Promise.all(
        ids.map(async (id) => {
            await firedumAdd({
                collectionReference: reference.doc(id).collection('colors'),
                fields: {
                    color: '',
                },
                numberOfDocuments: 5,
            })
        })
    )
})

// The exact thing goes for using the firedumCreateUser function
await firedumCreateUser({
    amountOfUsers: 5,
    fields: {
        firstName: '',
        lastName: '',
    },
    collectionReference: fs.collection('users'),
}).then(async ({ ids, reference }) => {
    await Promise.all(
        ids.map(async (id) => {
            await firedumAdd({
                collectionReference: reference.doc(id).collection('colors'),
                fields: {
                    color: '',
                },
                numberOfDocuments: 5,
            })
        })
    )
})
```
