const address = `zipCode
zipCodeByState
city
cityPrefix
citySuffix
cityName
streetName
streetAddress
streetSuffix
streetPrefix
secondaryAddress
county
country
countryCode
state
stateAbbr
latitude
longitude
direction
cardinalDirection
ordinalDirection
nearbyGPSCoordinate
timeZone`
    .trim()
    .split(' ')

const animal = `dog
cat
snake
bear
lion
cetacean
horse
bird
cow
fish
crocodilia
insect
rabbit
type`
    .trim()
    .split(' ')

const commerce = `color
department
productName
price
productAdjective
productMaterial
product
productDescription`
    .trim()
    .split(' ')
const fakerCatagories = { commerce }

export default fakerCatagories
