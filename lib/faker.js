'use strict';
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
var faker_1 = __importDefault(require('faker'));
var address = {
	zipCode: faker_1.default.address.zipCode,
	zipCodeByState: faker_1.default.address.zipCodeByState,
	city: faker_1.default.address.city,
	cityPrefix: faker_1.default.address.cityPrefix,
	citySuffix: faker_1.default.address.citySuffix,
	cityName: faker_1.default.address.cityName,
	streetName: faker_1.default.address.streetName,
	streetAddress: faker_1.default.address.streetAddress,
	streetSuffix: faker_1.default.address.streetSuffix,
	streetPrefix: faker_1.default.address.streetPrefix,
	secondaryAddress: faker_1.default.address.secondaryAddress,
	county: faker_1.default.address.county,
	country: faker_1.default.address.country,
	countryCode: faker_1.default.address.countryCode,
	state: faker_1.default.address.state,
	stateAbbr: faker_1.default.address.stateAbbr,
	latitude: faker_1.default.address.latitude,
	longitude: faker_1.default.address.longitude,
	direction: faker_1.default.address.direction,
	cardinalDirection: faker_1.default.address.cardinalDirection,
	ordinalDirection: faker_1.default.address.ordinalDirection,
	nearbyGPSCoordinate: faker_1.default.address.nearbyGPSCoordinate,
	timeZone: faker_1.default.address.timeZone
};
var commerce = {
	color: faker_1.default.commerce.color,
	department: faker_1.default.commerce.department,
	productName: faker_1.default.commerce.productName,
	price: faker_1.default.commerce.price,
	productAdjective: faker_1.default.commerce.productAdjective,
	productMaterial: faker_1.default.commerce.productMaterial,
	product: faker_1.default.commerce.product,
	productDescription: faker_1.default.commerce.productDescription
};
var company = {
	suffixes: faker_1.default.company.suffixes,
	companyName: faker_1.default.company.companyName,
	companySuffix: faker_1.default.company.companySuffix,
	catchPhrase: faker_1.default.company.catchPhrase,
	bs: faker_1.default.company.bs,
	catchPhraseAdjective: faker_1.default.company.catchPhraseAdjective,
	catchPhraseDescriptor: faker_1.default.company.catchPhraseDescriptor,
	catchPhraseNoun: faker_1.default.company.catchPhraseNoun,
	bsAdjective: faker_1.default.company.bsAdjective,
	bsBuzz: faker_1.default.company.bsBuzz,
	bsNoun: faker_1.default.company.bsNoun
};
var database = {
	column: faker_1.default.database.column,
	type: faker_1.default.database.type,
	collation: faker_1.default.database.collation,
	engine: faker_1.default.database.engine
};
var datatype = {
	number: faker_1.default.datatype.number,
	float: faker_1.default.datatype.float,
	datetime: faker_1.default.datatype.datetime,
	string: faker_1.default.datatype.string,
	uuid: faker_1.default.datatype.uuid,
	boolean: faker_1.default.datatype.boolean,
	hexaDecimal: faker_1.default.datatype.hexaDecimal,
	json: faker_1.default.datatype.json,
	array: faker_1.default.datatype.array
};
var date = {
	past: faker_1.default.date.past,
	future: faker_1.default.date.future,
	between: faker_1.default.date.between,
	recent: faker_1.default.date.recent,
	soon: faker_1.default.date.soon,
	month: faker_1.default.date.month,
	weekday: faker_1.default.date.weekday
};
var finance = {
	account: faker_1.default.finance.account,
	accountName: faker_1.default.finance.accountName,
	routingNumber: faker_1.default.finance.routingNumber,
	mask: faker_1.default.finance.mask,
	amount: faker_1.default.finance.amount,
	transactionType: faker_1.default.finance.transactionType,
	currencyCode: faker_1.default.finance.currencyCode,
	currencyName: faker_1.default.finance.currencyName,
	currencySymbol: faker_1.default.finance.currencySymbol,
	bitcoinAddress: faker_1.default.finance.bitcoinAddress,
	litecoinAddress: faker_1.default.finance.litecoinAddress,
	creditCardNumber: faker_1.default.finance.creditCardNumber,
	creditCardCVV: faker_1.default.finance.creditCardCVV,
	ethereumAddress: faker_1.default.finance.ethereumAddress,
	iban: faker_1.default.finance.iban,
	bic: faker_1.default.finance.bic,
	transactionDescription: faker_1.default.finance.transactionDescription
};
var git = {
	branch: faker_1.default.git.branch,
	commitEntry: faker_1.default.git.commitEntry,
	commitMessage: faker_1.default.git.commitMessage,
	commitSha: faker_1.default.git.commitSha,
	shortSha: faker_1.default.git.shortSha
};
var hacker = {
	abbreviation: faker_1.default.hacker.abbreviation,
	adjective: faker_1.default.hacker.adjective,
	noun: faker_1.default.hacker.noun,
	verb: faker_1.default.hacker.verb,
	ingverb: faker_1.default.hacker.ingverb,
	phrase: faker_1.default.hacker.phrase
};
var helpers = {
	randomize: faker_1.default.helpers.randomize,
	slugify: faker_1.default.helpers.slugify,
	replaceSymbolWithNumber: faker_1.default.helpers.replaceSymbolWithNumber,
	replaceSymbols: faker_1.default.helpers.replaceSymbols,
	replaceCreditCardSymbols: faker_1.default.helpers.replaceCreditCardSymbols,
	repeatString: faker_1.default.helpers.repeatString,
	regexpStyleStringParse: faker_1.default.helpers.regexpStyleStringParse,
	shuffle: faker_1.default.helpers.shuffle,
	mustache: faker_1.default.helpers.mustache,
	createCard: faker_1.default.helpers.createCard,
	contextualCard: faker_1.default.helpers.contextualCard,
	userCard: faker_1.default.helpers.userCard,
	createTransaction: faker_1.default.helpers.createTransaction
};
var image = {
	image: faker_1.default.image.image,
	avatar: faker_1.default.image.avatar,
	imageUrl: faker_1.default.image.imageUrl,
	abstract: faker_1.default.image.abstract,
	animals: faker_1.default.image.animals,
	business: faker_1.default.image.business,
	cats: faker_1.default.image.cats,
	food: faker_1.default.image.food,
	nightlife: faker_1.default.image.nightlife,
	fashion: faker_1.default.image.fashion,
	people: faker_1.default.image.people,
	nature: faker_1.default.image.nature,
	sports: faker_1.default.image.sports,
	technics: faker_1.default.image.technics,
	transport: faker_1.default.image.transport,
	dataUri: faker_1.default.image.dataUri
};
var internet = {
	email: faker_1.default.internet.email,
	exampleEmail: faker_1.default.internet.exampleEmail,
	userName: faker_1.default.internet.userName,
	protocol: faker_1.default.internet.protocol,
	url: faker_1.default.internet.url,
	domainName: faker_1.default.internet.domainName,
	domainSuffix: faker_1.default.internet.domainSuffix,
	domainWord: faker_1.default.internet.domainWord,
	ip: faker_1.default.internet.ip,
	ipv6: faker_1.default.internet.ipv6,
	port: faker_1.default.internet.port,
	userAgent: faker_1.default.internet.userAgent,
	mac: faker_1.default.internet.mac,
	password: faker_1.default.internet.password
};
var lorem = {
	word: faker_1.default.lorem.word,
	words: faker_1.default.lorem.words,
	sentence: faker_1.default.lorem.sentence,
	slug: faker_1.default.lorem.slug,
	sentences: faker_1.default.lorem.sentences,
	paragraph: faker_1.default.lorem.paragraph,
	paragraphs: faker_1.default.lorem.paragraphs,
	text: faker_1.default.lorem.text,
	lines: faker_1.default.lorem.lines
};
var music = {
	genre: faker_1.default.music.genre
};
var name = {
	firstName: faker_1.default.name.firstName,
	lastName: faker_1.default.name.lastName,
	middleName: faker_1.default.name.middleName,
	findName: faker_1.default.name.findName,
	jobTitle: faker_1.default.name.jobTitle,
	gender: faker_1.default.name.gender,
	prefix: faker_1.default.name.prefix,
	suffix: faker_1.default.name.suffix,
	title: faker_1.default.name.title,
	jobDescriptor: faker_1.default.name.jobDescriptor,
	jobArea: faker_1.default.name.jobArea,
	jobType: faker_1.default.name.jobType
};
var phone = {
	phoneNumber: faker_1.default.phone.phoneNumber,
	phoneNumberFormat: faker_1.default.phone.phoneNumberFormat,
	phoneFormats: faker_1.default.phone.phoneFormats
};
var random = {
	arrayElement: faker_1.default.random.arrayElement,
	arrayElements: faker_1.default.random.arrayElements,
	objectElement: faker_1.default.random.objectElement,
	locale: faker_1.default.random.locale,
	alpha: faker_1.default.random.alpha,
	alphaNumeric: faker_1.default.random.alphaNumeric
};
var system = {
	fileName: faker_1.default.system.fileName,
	commonFileName: faker_1.default.system.commonFileName,
	mimeType: faker_1.default.system.mimeType,
	commonFileType: faker_1.default.system.commonFileType,
	commonFileExt: faker_1.default.system.commonFileExt,
	fileType: faker_1.default.system.fileType,
	fileExt: faker_1.default.system.fileExt,
	directoryPath: faker_1.default.system.directoryPath,
	filePath: faker_1.default.system.filePath,
	semver: faker_1.default.system.semver
};
var vehicle = {
	vehicle: faker_1.default.vehicle.vehicle,
	manufacturer: faker_1.default.vehicle.manufacturer,
	model: faker_1.default.vehicle.model,
	fuel: faker_1.default.vehicle.fuel,
	vin: faker_1.default.vehicle.vin,
	vrm: faker_1.default.vehicle.vrm,
	bicycle: faker_1.default.vehicle.bicycle
};
var fakerCatagories = __assign(
	__assign(
		__assign(
			__assign(
				__assign(
					__assign(
						__assign(
							__assign(
								__assign(
									__assign(
										__assign(
											__assign(
												__assign(
													__assign(
														__assign(
															__assign(
																__assign(
																	__assign(__assign({}, address), commerce),
																	company
																),
																database
															),
															datatype
														),
														date
													),
													finance
												),
												git
											),
											hacker
										),
										helpers
									),
									image
								),
								internet
							),
							lorem
						),
						music
					),
					name
				),
				phone
			),
			random
		),
		system
	),
	vehicle
);
exports.default = fakerCatagories;
//# sourceMappingURL=faker.js.map
