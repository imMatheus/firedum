import firebase from 'firebase/app'
import getRandomNumber from '../utils/getRandomNumber'
import getRandomString from '../utils/getRandomString'
import faker from 'faker'

interface Props {
    collectionReference: firebase.firestore.CollectionReference
    fields: { [key: string]: any }
    numberOfItems?: number
}

export default async function firedumAdd({
    collectionReference,
    fields,
    numberOfItems = 1, // default is 1
}: Props) {
    if (!collectionReference) throw new Error('Please provide a firestore collection reference')
    if (!fields) throw new Error('Please provide at least one field to fields')

    for (let i = 0; i < numberOfItems; i++) {
        let data: { [key: string]: any } = {}
        for (const field in fields) {
            if (fields[field]) {
                data[field] = fields[field]
            } else {
                let fieldType = typeof fields[field]
                let value
                switch (field) {
                    case 'name':
                        value = faker.name.firstName() + ' ' + faker.name.lastName()
                        break
                    case 'firstName':
                        value = faker.name.firstName()
                        break
                    case 'lastName':
                        value = faker.name.lastName()
                        break
                    case 'phoneNumber':
                        value = faker.phone.phoneNumber()
                        break
                    case 'past':
                        value = faker.date.past()
                        break
                    case 'future':
                        value = faker.date.future()
                        break
                    case 'recent':
                        value = faker.date.recent()
                        break
                    case 'month':
                        value = faker.date.month()
                        break
                    case 'weekday':
                        value = faker.date.weekday()
                        break
                    case 'abbreviation':
                        value = faker.date.weekday()
                        break
                    case 'adjective':
                        value = faker.hacker.adjective()
                        break
                    case 'noun':
                        value = faker.hacker.noun()
                        break
                    case 'verb':
                        value = faker.hacker.verb()
                        break
                    case 'ingverb':
                        value = faker.hacker.ingverb()
                        break
                    case 'phrase':
                        value = faker.hacker.phrase()
                        break

                    default:
                        if (fieldType === typeof 1) value = getRandomNumber(4)
                        else if (fieldType === typeof '') value = getRandomString(4)
                        break
                }

                // let value: string | number = getRandomString(5)

                data[field] = value
            }
        }
        await collectionReference.add(data)
    }
}
