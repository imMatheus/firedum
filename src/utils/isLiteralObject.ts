interface Constructor {
    constructor: any
}
export default function isLiteralObject<T extends Constructor>(a: T): boolean {
    return !!a && a.constructor === Object
}
