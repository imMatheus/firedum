// import { fs } from './firebase'
import firedumAdd from './functions/firedumAdd'
import firedumUpdate from './functions/firedumUpdate'
import firedumCreateUser from './functions/firebaseCreateUser'
import isLiteralObject from './utils/isLiteralObject'

// const fields = { firstName: '', lastName: '', age: 0 }
// const OPTIONS = {
//     collectionReference: fs.collection('test'),
//     // item: { hej: 'hej' },
//     fields: {
//         name: 'n4m3',
//         // lastName: 'lasting',
//         age: 45,
//         pay: 0,
//     },
//     numberOfItems: 2,
// }
// firedumAdd(OPTIONS)
// firedumCreateUser({
//     amountOfUsers: 10,
//     userFields: { yy: 'matheus', i: 0 },
//     usersCollectionReference: fs.collection('using'),
// })
// firestoreUpdate(OPTIONS)
export default { firedumAdd, firedumUpdate, firedumCreateUser }
// fs.collection('test').add({ name: getRandomString(5) })
