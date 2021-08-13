import firedum, { firedumAdd, firedumCreateUser, firedumUpdate } from '../src/index'
import app, { fs } from './firebase'
firedum(app)

const runner = async () => {
    console.log('start')
    console.time('starter')
    console.timeLog('starter')
    // await firedumAdd({
    //     collectionReference: fs.collection('kkkskdn'),
    //     fields: {
    //         coloringItBrah: ':color',
    //         bio: ':sentence',
    //     },
    //     numberOfDocuments: 1,
    // })

    await firedumCreateUser({
        amountOfUsers: 1,
        fields: {
            zipCode: 0,
            colorIng: ':color',
            joinedAt: new Date(),
        },
        collectionReference: fs.collection('nghy'),
    })
    console.timeEnd('starter')
    console.log('ending it all')
}
runner()
