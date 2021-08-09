import firebase from 'firebase/app'
import fakerCatagories from '../faker'

interface Props {
    collectionReference: firebase.firestore.CollectionReference
    fields: { [key: string]: any }
}

/**
 *
 * @param collectionReference
 * @param fields
 */
export default async function firedumUpdate({ collectionReference, fields }: Props) {
    await collectionReference.get().then(async (querySnapshot) => {
        querySnapshot.forEach(async function (doc) {
            for (const field in fields) {
                if (!fields[field]) {
                    let value = fakerCatagories.firstName()
                    if (fakerCatagories[field]) {
                        if (fakerCatagories[field]()) {
                            value = await fakerCatagories[field]()
                        }
                    }

                    fields[field] = value
                }
            }
            collectionReference.doc(doc.id).update({ ...fields })
        })
    })
}
