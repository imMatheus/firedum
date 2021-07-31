# Firedum - an firestore package for quick testing

# Installation

`npm i firedum -D`

# Usage

```js
// index.js / index.ts
import { fs } from './firebase'
import { firedumAdd } from 'firedum'

const OPTIONS = {
    collectionReference: fs.collection('users'),
    fields: {
        firstName: 'Foo',
        lastName: 'Bar',
    },
    numberOfItems: 10,
}

firedumAdd(OPTIONS)
```

Initialize firebase app

```js
// firebase.js / firebase.ts
import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
})

export const fs = firebase.firestore()

export default app
```

# Functions

## firedumAdd

Adds new documents to a given collection collection

```js
import { firedumAdd } from 'firedum'

const OPTIONS = {
    // a reference to a firestore collection - REQUIRED
    collectionReference: fs.collection('users'),
    fields: {
        // a lsit of fields to be added to the each document
        firstName: 'Foo',
        lastName: 'Bar',
        age: 21,
        address: '',
        money: 0,
        // NOTE if a field gets passed a falsy value
        // such as an empty string or 0 it will randomly generate it for you
    },
    // number of items to be added to the collection - defaults to 1
    numberOfItems: 10,
}

firedumAdd(OPTIONS)
```

## firedumUpdate

Updates every document in a collection

```js
import { firedumUpdate } from 'firedum'

const OPTIONS = {
    // a reference to a firestore collection - REQUIRED
    collectionReference: fs.collection('users'),
    // a lsit of fields to be change to the document
    fields: {
        lastName: 'Baz', // changes the lastName property of each document to 'Baz'
        age: 54, // changes the age property of each document to 54
        // NOTE if a document doesn't have a given field, firedum will add it
    },
}

firedumUpdate(OPTIONS)
```
