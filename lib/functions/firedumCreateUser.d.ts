import { CollectionReference } from 'firebase/firestore';
interface Props {
    amountOfUsers?: number;
    fields?: {
        [key: string]: any;
    };
    collectionReference?: CollectionReference;
}
/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} fields - Object storing additional data about each added user
 * @param {CollectionReference} collectionReference - a reference to a users collection to store additional data about user
 * @returns {Object} {data, ids, collectionReference }
 */
export default function firedumCreateUser({ amountOfUsers, fields, collectionReference }: Props): Promise<unknown>;
export {};
//# sourceMappingURL=firedumCreateUser.d.ts.map