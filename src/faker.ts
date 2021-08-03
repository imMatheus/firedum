import faker from 'faker'
const address = {
    zipCode: faker.address.zipCode,
    zipCodeByState: faker.address.zipCodeByState,
    city: faker.address.city,
    cityPrefix: faker.address.cityPrefix,
    citySuffix: faker.address.citySuffix,
    cityName: faker.address.cityName,
    streetName: faker.address.streetName,
    streetAddress: faker.address.streetAddress,
    streetSuffix: faker.address.streetSuffix,
    streetPrefix: faker.address.streetPrefix,
    secondaryAddress: faker.address.secondaryAddress,
    county: faker.address.county,
    country: faker.address.country,
    countryCode: faker.address.countryCode,
    state: faker.address.state,
    stateAbbr: faker.address.stateAbbr,
    latitude: faker.address.latitude,
    longitude: faker.address.longitude,
    direction: faker.address.direction,
    cardinalDirection: faker.address.cardinalDirection,
    ordinalDirection: faker.address.ordinalDirection,
    nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate,
    timeZone: faker.address.timeZone,
}

const commerce = {
    color: faker.commerce.color,
    department: faker.commerce.department,
    productName: faker.commerce.productName,
    price: faker.commerce.price,
    productAdjective: faker.commerce.productAdjective,
    productMaterial: faker.commerce.productMaterial,
    product: faker.commerce.product,
    productDescription: faker.commerce.productDescription,
}

const company = {
    suffixes: faker.company.suffixes,
    companyName: faker.company.companyName,
    companySuffix: faker.company.companySuffix,
    catchPhrase: faker.company.catchPhrase,
    bs: faker.company.bs,
    catchPhraseAdjective: faker.company.catchPhraseAdjective,
    catchPhraseDescriptor: faker.company.catchPhraseDescriptor,
    catchPhraseNoun: faker.company.catchPhraseNoun,
    bsAdjective: faker.company.bsAdjective,
    bsBuzz: faker.company.bsBuzz,
    bsNoun: faker.company.bsNoun,
}

const database = {
    column: faker.database.column,
    type: faker.database.type,
    collation: faker.database.collation,
    engine: faker.database.engine,
}

const datatype = {
    number: faker.datatype.number,
    float: faker.datatype.float,
    datetime: faker.datatype.datetime,
    string: faker.datatype.string,
    uuid: faker.datatype.uuid,
    boolean: faker.datatype.boolean,
    hexaDecimal: faker.datatype.hexaDecimal,
    json: faker.datatype.json,
    array: faker.datatype.array,
}

const date = {
    past: faker.date.past,
    future: faker.date.future,
    between: faker.date.between,
    recent: faker.date.recent,
    soon: faker.date.soon,
    month: faker.date.month,
    weekday: faker.date.weekday,
}
const finance = {
    account: faker.finance.account,
    accountName: faker.finance.accountName,
    routingNumber: faker.finance.routingNumber,
    mask: faker.finance.mask,
    amount: faker.finance.amount,
    transactionType: faker.finance.transactionType,
    currencyCode: faker.finance.currencyCode,
    currencyName: faker.finance.currencyName,
    currencySymbol: faker.finance.currencySymbol,
    bitcoinAddress: faker.finance.bitcoinAddress,
    litecoinAddress: faker.finance.litecoinAddress,
    creditCardNumber: faker.finance.creditCardNumber,
    creditCardCVV: faker.finance.creditCardCVV,
    ethereumAddress: faker.finance.ethereumAddress,
    iban: faker.finance.iban,
    bic: faker.finance.bic,
    transactionDescription: faker.finance.transactionDescription,
}

const git = {
    branch: faker.git.branch,
    commitEntry: faker.git.commitEntry,
    commitMessage: faker.git.commitMessage,
    commitSha: faker.git.commitSha,
    shortSha: faker.git.shortSha,
}

const hacker = {
    abbreviation: faker.hacker.abbreviation,
    adjective: faker.hacker.adjective,
    noun: faker.hacker.noun,
    verb: faker.hacker.verb,
    ingverb: faker.hacker.ingverb,
    phrase: faker.hacker.phrase,
}

const helpers = {
    randomize: faker.helpers.randomize,
    slugify: faker.helpers.slugify,
    replaceSymbolWithNumber: faker.helpers.replaceSymbolWithNumber,
    replaceSymbols: faker.helpers.replaceSymbols,
    replaceCreditCardSymbols: faker.helpers.replaceCreditCardSymbols,
    repeatString: faker.helpers.repeatString,
    regexpStyleStringParse: faker.helpers.regexpStyleStringParse,
    shuffle: faker.helpers.shuffle,
    mustache: faker.helpers.mustache,
    createCard: faker.helpers.createCard,
    contextualCard: faker.helpers.contextualCard,
    userCard: faker.helpers.userCard,
    createTransaction: faker.helpers.createTransaction,
}

const image = {
    image: faker.image.image,
    avatar: faker.image.avatar,
    imageUrl: faker.image.imageUrl,
    abstract: faker.image.abstract,
    animals: faker.image.animals,
    business: faker.image.business,
    cats: faker.image.cats,
    food: faker.image.food,
    nightlife: faker.image.nightlife,
    fashion: faker.image.fashion,
    people: faker.image.people,
    nature: faker.image.nature,
    sports: faker.image.sports,
    technics: faker.image.technics,
    transport: faker.image.transport,
    dataUri: faker.image.dataUri,
}

const internet = {
    email: faker.internet.email,
    exampleEmail: faker.internet.exampleEmail,
    userName: faker.internet.userName,
    protocol: faker.internet.protocol,
    url: faker.internet.url,
    domainName: faker.internet.domainName,
    domainSuffix: faker.internet.domainSuffix,
    domainWord: faker.internet.domainWord,
    ip: faker.internet.ip,
    ipv6: faker.internet.ipv6,
    port: faker.internet.port,
    userAgent: faker.internet.userAgent,
    mac: faker.internet.mac,
    password: faker.internet.password,
}

const lorem = {
    word: faker.lorem.word,
    words: faker.lorem.words,
    sentence: faker.lorem.sentence,
    slug: faker.lorem.slug,
    sentences: faker.lorem.sentences,
    paragraph: faker.lorem.paragraph,
    paragraphs: faker.lorem.paragraphs,
    text: faker.lorem.text,
    lines: faker.lorem.lines,
}

const music = {
    genre: faker.music.genre,
}

const name = {
    firstName: faker.name.firstName,
    lastName: faker.name.lastName,
    middleName: faker.name.middleName,
    findName: faker.name.findName,
    jobTitle: faker.name.jobTitle,
    gender: faker.name.gender,
    prefix: faker.name.prefix,
    suffix: faker.name.suffix,
    title: faker.name.title,
    jobDescriptor: faker.name.jobDescriptor,
    jobArea: faker.name.jobArea,
    jobType: faker.name.jobType,
}

const phone = {
    phoneNumber: faker.phone.phoneNumber,
    phoneNumberFormat: faker.phone.phoneNumberFormat,
    phoneFormats: faker.phone.phoneFormats,
}

const random = {
    arrayElement: faker.random.arrayElement,
    arrayElements: faker.random.arrayElements,
    objectElement: faker.random.objectElement,
    locale: faker.random.locale,
    alpha: faker.random.alpha,
    alphaNumeric: faker.random.alphaNumeric,
}

const system = {
    fileName: faker.system.fileName,
    commonFileName: faker.system.commonFileName,
    mimeType: faker.system.mimeType,
    commonFileType: faker.system.commonFileType,
    commonFileExt: faker.system.commonFileExt,
    fileType: faker.system.fileType,
    fileExt: faker.system.fileExt,
    directoryPath: faker.system.directoryPath,
    filePath: faker.system.filePath,
    semver: faker.system.semver,
}

const vehicle = {
    vehicle: faker.vehicle.vehicle,
    manufacturer: faker.vehicle.manufacturer,
    model: faker.vehicle.model,
    fuel: faker.vehicle.fuel,
    vin: faker.vehicle.vin,
    vrm: faker.vehicle.vrm,
    bicycle: faker.vehicle.bicycle,
}

const fakerCatagories: any = {
    ...address,
    ...commerce,
    ...company,
    ...database,
    ...datatype,
    ...date,
    ...finance,
    ...git,
    ...hacker,
    ...helpers,
    ...image,
    ...internet,
    ...lorem,
    ...music,
    ...name,
    ...phone,
    ...random,
    ...system,
    ...vehicle,
}

export default fakerCatagories
