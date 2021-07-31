import { fs } from './firebase'
import firedumAdd from './functions/firedumAdd'
import firedumUpdate from './functions/firedumUpdate'
import firedumCreateUser from './functions/firebaseCreateUser'
const fields = { firstName: '', lastName: '', age: 0 }
const OPTIONS = {
    collectionReference: fs.collection('test'),
    // item: { hej: 'hej' },
    fields: {
        name: 'n4m3',
        // lastName: 'lasting',
        age: 45,
        pay: 0,
    },
    numberOfItems: 2,
}
firedumAdd(OPTIONS)
firedumCreateUser({ userFields: { 0: 'matheus', _0: 0 } })
// firestoreUpdate(OPTIONS)
export default { firedumAdd, firedumUpdate }
// fs.collection('test').add({ name: getRandomString(5) })
