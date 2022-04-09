import fakerCatagories from '../faker';
import { CollectionReference, addDoc } from 'firebase/firestore';

interface Props {
	collectionReference: CollectionReference;
	fields: { [key: string]: any };
	numberOfDocuments?: number;
	documents?: any[];
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
	documents
}: Props) {
	if (!collectionReference)
		throw new Error('Please provide a firestore collection reference'); // collectionReference is required
	if (!fields && !documents)
		throw new Error(
			'Please provide at least one field to fields or an array of documents'
		); // required
	if (documents && documents.length > 0) {
		numberOfDocuments = documents!.length; // we only want to add the given docs, not more or less
	}
	let data: any = [];
	for (let i = 0; i < numberOfDocuments; i++) {
		let generatedFields: any = {};
		for (const field in fields) {
			let value = fakerCatagories.firstName();
			generatedFields[field] = fields[field];

			if (typeof fields[field] === 'string') {
				if (
					!fields[field] &&
					fakerCatagories[field] &&
					fakerCatagories[field]()
				) {
					value = await fakerCatagories[field]();
					generatedFields[field] = value;
				} else if (
					fields[field].length > 1 &&
					fields[field][0] === ':' &&
					fakerCatagories[fields[field].slice(1)]
				) {
					value = await fakerCatagories[fields[field].slice(1)]();
					generatedFields[field] = value;
				} else if (fields[field] === '') {
					generatedFields[field] = value;
				} else {
					generatedFields[field] = fields[field];
				}
			}
		}

		// any given field to the document will override what gets passed by in fields
		if (documents) documents[i] = { ...generatedFields, ...documents[i] };
		else data.push(generatedFields);
	}
	if (documents) {
		// push the docs
		let ids: string[] = [];
		await Promise.all(
			documents.map(async (doc: any) => {
				const id = (await addDoc(collectionReference, doc)).id;
				ids.push(id);
			})
		);
		return { documents, ids, reference: collectionReference };
	} else {
		let ids: string[] = [];
		await Promise.all(
			data.map(async (doc: any) => {
				const id = (await addDoc(collectionReference, doc)).id;
				ids.push(id);
			})
		);
		return { data, ids, reference: collectionReference };
	}
}
