import { fs } from './firebase'
import firedumAdd from './functions/firedumAdd'
import firedumUpdate from './functions/firedumUpdate'
import firedumCreateUser from './functions/firebaseCreateUser'

const OPTIONS = {
    collectionReference: fs.collection('r'),
    // item: { hej: 'hej' },
    fields: {
        name: null,
        // abbreviation: '',
        // adjective: '',
        // noun: '',
        // verb: '',
        // ingverb: '',
        // phrase: '',
        // past: '',
        // future: '',
        // recent: '',
        // month: '',
        // weekday: '',
    },
    numberOfItems: 10000,
}
const runner = async () => {
    console.log('start')
    console.time('starter')
    console.timeLog('starter')
    let g = await firedumAdd(OPTIONS)
    console.log('end')
    console.timeEnd('starter')
    console.log(g)
}
runner()
// firedumCreateUser({
//     amountOfUsers: 10,
//     userFields: { yy: 'matheus', i: 0 },
//     usersCollectionReference: fs.collection('using'),
// })
// firestoreUpdate(OPTIONS)
export { firedumAdd, firedumUpdate, firedumCreateUser }
// fs.collection('test').add({ name: getRandomString(5) })
