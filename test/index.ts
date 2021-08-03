import { firedumAdd, firedumUpdate, firedumCreateUser } from '../src/index'
import { fs } from '../src/firebase'

console.log('hej på dig')

const OPTIONS = {
    collectionReference: fs.collection('iikk'),
    documents: [
        { zipCode: '1', name: 'a' },
        { zipCode: '2', name: 'b' },
        { zipCode: '3', name: 'c' },
        { zipCode: '4', name: 'd' },
    ],
    fields: {
        companyName: '',
        loo: '',
        ppp: 'pppp',
    },
    numberOfItems: 0,
}
const runner = async () => {
    console.log('start')
    console.time('starter')
    console.timeLog('starter')

    try {
        await firedumAdd(OPTIONS)
    } catch (error) {
        console.log(error)
    }
    console.timeEnd('starter')
    console.log('end')
}
runner()
