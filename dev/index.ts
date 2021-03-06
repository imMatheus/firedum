import firedum, {
	firedumAdd,
	firedumCreateUser,
	firedumUpdate
} from '../src/index';
import app, { fs } from './firebase';
import { collection } from 'firebase/firestore';

firedum(app);

const runner = async () => {
	console.log('start');
	console.time('starter');
	console.timeLog('starter');
	await firedumAdd({
		collectionReference: collection(fs, 'papapapapapa'),
		fields: {
			name: ':firstName',
			displayName: ':userName',
			location: ':city'
			// profileImage: ':avatar',
			// bio: ':sentence',
			// url: ':url',
			// joinedAt: new Date(),
			// amountOfFollowers: ':number',
			// amountOfFollowing: ':number',
		},
		numberOfDocuments: 20
	}).then((b) => console.log(b));

	// let g = await firedumCreateUser({
	//     collectionReference: fs.collection('aaa'),
	//     fields: {
	//         name: ':firstName',
	//         displayName: ':userName',
	//         profileImage: ':avatar',
	//         bio: ':sentence',
	//         location: ':city',
	//         url: ':url',
	//         joinedAt: new Date(),
	//         amountOfFollowers: ':number',
	//         amountOfFollowing: ':number',
	//     },
	//     amountOfUsers: 10,
	// })

	console.timeEnd('starter');
	console.log('ending it all');
};
runner();
