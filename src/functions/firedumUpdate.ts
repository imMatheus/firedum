import fakerCatagories from '../faker';
import {
	CollectionReference,
	getDocs,
	updateDoc,
	doc
} from 'firebase/firestore';

interface Props {
	collectionReference: CollectionReference;
	fields: { [key: string]: any };
}

/**
 *
 * @param collectionReference
 * @param fields
 */
export default async function firedumUpdate({
	collectionReference,
	fields
}: Props) {
	await getDocs(collectionReference).then(async (querySnapshot) => {
		querySnapshot.forEach(async function (document) {
			for (const field in fields) {
				if (!fields[field]) {
					let value = fakerCatagories.firstName();
					if (fakerCatagories[field]) {
						if (fakerCatagories[field]()) {
							value = await fakerCatagories[field]();
						}
					}

					fields[field] = value;
				}
			}

			updateDoc(doc(collectionReference, document.id), fields);
		});
	});
}
