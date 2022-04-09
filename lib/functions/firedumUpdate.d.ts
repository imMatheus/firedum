import { CollectionReference } from 'firebase/firestore';
interface Props {
    collectionReference: CollectionReference;
    fields: {
        [key: string]: any;
    };
}
/**
 *
 * @param collectionReference
 * @param fields
 */
export default function firedumUpdate({ collectionReference, fields }: Props): Promise<void>;
export {};
//# sourceMappingURL=firedumUpdate.d.ts.map