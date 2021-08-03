import firebase from 'firebase/app';
interface Props {
    amountOfUsers?: number;
    userFields?: {
        [key: string]: any;
    };
    usersCollectionReference?: firebase.firestore.CollectionReference;
}
/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} userFields - Object storing additional data about each added user
 * @param {CollectionReference} usersCollectionReference - a reference to a users collection to store additional data about user
 * @returns
 */
export default function firedumCreateUser({ amountOfUsers, userFields, usersCollectionReference, }: Props): Promise<void>;
export {};
//# sourceMappingURL=firebaseCreateUser.d.ts.map