/**
 *
 * @param length - length of string
 */
export default function getRandomString(length: number, includeNumbers?: boolean) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    const upperCaseAlphabet: string = alphabet // converts it into uppercase
        .split('')
        .map((c) => c.toUpperCase())
        .join('')
    const numbers = includeNumbers ? '0123456789' : ''
    const characters = alphabet + upperCaseAlphabet + numbers // combine all of them into one string

    let value = ''
    for (let i = 0; i < length; i++) {
        const n = Math.floor(Math.random() * characters.length)
        value += characters[n]
    }

    return value
}
