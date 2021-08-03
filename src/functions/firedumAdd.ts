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
 * @returns
 */
export default async function firedumAdd({
    collectionReference,
    fields,
    numberOfDocuments = 1, // default is 1
    documents,
}: Props) {
    if (!collectionReference) throw new Error('Please provide a firestore collection reference') // collectionReference is required
    if (!fields || !documents)
        throw new Error('Please provide at least one field to fields or an array of documents') // required
    let dataArray: any = []
    if (documents && documents.length > 0) {
        numberOfDocuments = documents!.length // we only want to add the given docs, not more or less
    }
    for (let i = 0; i < numberOfDocuments; i++) {
        let data: { [key: string]: any } = {} // data object to be added with docs
        for (const field in fields) {
            if (fields[field]) {
                // if a given if field is not falsy we don't override it
                data[field] = fields[field]
            } else {
                let value = fakerCatagories.firstName()
                if (fakerCatagories[field]) {
                    if (fakerCatagories[field]()) {
                        value = await fakerCatagories[field]()
                    }
                }

                data[field] = value
            }
        }
        // any given field to the document will override what gets passed by in fields
        if (documents) documents[i] = { ...data, ...documents[i] }
        else dataArray.push(data)
    }
    if (documents) {
        // push the docs
        await Promise.all(documents.map((data: any) => collectionReference.add(data)))
    } else {
        await Promise.all(dataArray.map((data: any) => collectionReference.add(data)))
    }
    return dataArray
}
