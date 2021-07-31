import { fs } from './firebase'
import firestoreAdd from './functions/firestoreAdd'
import firestoreUpdate from './functions/firestoreUpdate'

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
firestoreAdd(OPTIONS)
// firestoreUpdate(OPTIONS)
export default { firestoreAdd, firestoreUpdate }
// fs.collection('test').add({ name: getRandomString(5) })
