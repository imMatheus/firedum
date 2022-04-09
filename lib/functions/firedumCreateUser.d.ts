import firebase from 'firebase/app';
interface Props {
	amountOfUsers?: number;
	fields?: {
		[key: string]: any;
	};
	collectionReference?: firebase.firestore.CollectionReference;
}
/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} userFields - Object storing additional data about each added user
 * @param {CollectionReference} usersCollectionReference - a reference to a users collection to store additional data about user
 * @returns {Object} {data, ids, collectionReference }
 */
export default function firedumCreateUser({
	amountOfUsers,
	fields,
	collectionReference
}: Props): Promise<any>;
export {};
//# sourceMappingURL=firedumCreateUser.d.ts.map
