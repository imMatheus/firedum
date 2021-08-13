import firebase from 'firebase/app'
import fakerCatagories from '../faker'

interface Props {
    collectionReference: firebase.firestore.CollectionReference
    fields: { [key: string]: any }
    numberOfDocuments?: number
    documents?: any[]
}

/**
 * @param {collectionReference} collectionReference - reference to a firestore collection.
 * @param {Object} fields - the fields to be added to each document
 * @param {Object} numberOfDocuments - the number of documents to be added th teh collection
 * @param {Array<Object>} documents - if passed, firedum will add all of the documents given and ignores the numberOfDocuments variable
 * @returns {Array, Array, collectionReference} {data, ids, collectionReference }
 */
export default async function firedumAdd({
    collectionReference,
    fields,
    numberOfDocuments = 1, // default is 1
    documents,
}: Props) {
    if (!collectionReference) throw new Error('Please provide a firestore collection reference') // collectionReference is required
    if (!fields && !documents)
        throw new Error('Please provide at least one field to fields or an array of documents') // required
    if (documents && documents.length > 0) {
        numberOfDocuments = documents!.length // we only want to add the given docs, not more or less
    }
    let data: any = []
    for (let i = 0; i < numberOfDocuments; i++) {
        for (const field in fields) {
            let value = fakerCatagories.firstName()
            if (fields[field].split(':').length > 1) {
                if (fields[field].split(':')[1]) {
                    value = await fakerCatagories[fields[field].split(':')[1]]()
                    fields[field] = value
                }
            } else if (!fields[field]) {
                if (fakerCatagories[field]) {
                    if (fakerCatagories[field]()) {
                        value = await fakerCatagories[field]()
                    }
                }

                fields[field] = value
            }
        }
        // any given field to the document will override what gets passed by in fields
        if (documents) documents[i] = { ...fields, ...documents[i] }
        else data.push(fields)
    }
    if (documents) {
        // push the docs
        let ids: string[] = []
        await Promise.all(
            documents.map((doc: any) => {
                let id = collectionReference.doc().id
                ids.push(id)
                collectionReference.doc(id).set(doc)
            })
        )
        return { documents, ids, reference: collectionReference }
    } else {
        let ids: string[] = []
        await Promise.all(
            data.map(async (doc: any) => {
                let id = collectionReference.doc().id
                ids.push(id)
                await collectionReference.doc(id).set(doc)
            })
        )
        return { data, ids, reference: collectionReference }
    }
}
