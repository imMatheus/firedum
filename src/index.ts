import { fs } from './firebase'
import firedumAdd from './functions/firedumAdd'
import firedumUpdate from './functions/firedumUpdate'
import firedumCreateUser from './functions/firebaseCreateUser'
import isLiteralObject from './utils/isLiteralObject'

console.log(!(5 < 7))

const OPTIONS = {
    collectionReference: fs.collection('names'),
    // item: { hej: 'hej' },
    fields: {
        name: null,
        abbreviation: '',
        adjective: '',
        noun: '',
        verb: '',
        ingverb: '',
        phrase: '',
        // past: '',
        // future: '',
        // recent: '',
        // month: '',
        // weekday: '',
    },
    numberOfItems: 300,
}
firedumAdd(OPTIONS)
// firedumCreateUser({
//     amountOfUsers: 10,
//     userFields: { yy: 'matheus', i: 0 },
//     usersCollectionReference: fs.collection('using'),
// })
// firestoreUpdate(OPTIONS)
export { firedumAdd, firedumUpdate, firedumCreateUser }
// fs.collection('test').add({ name: getRandomString(5) })
