import firedum, { firedumAdd, firedumCreateUser, firedumUpdate } from '../src/index'
import app, { fs } from './firebase'
firedum(app)

const runner = async () => {
    console.log('start')
    console.time('starter')
    console.timeLog('starter')
    await firedumAdd({
        collectionReference: fs.collection('kkkskdn'),
        fields: {
            coloringItBrah: ':color',
            bio: ':sentence',
        },
        numberOfDocuments: 1,
    })

    // await firedumCreateUser({
    //     amountOfUsers: 1,
    //     fields: {
    //         zipCode: '',
    //         color: '',
    //     },
    //     collectionReference: fs.collection('ww'),
    // }).then(async ({ ids, reference }) => {
    //     await Promise.all(
    //         ids.map(async (id: string) => {
    //             await firedumAdd({
    //                 collectionReference: reference.doc(id).collection('wegood'),
    //                 fields: {
    //                     color: '',
    //                 },
    //                 numberOfDocuments: 2,
    //             })
    //         })
    //     )
    // })
    console.timeEnd('starter')
    console.log('ending it all')
}
runner()
