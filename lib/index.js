"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("./firebase");
var firedumAdd_1 = __importDefault(require("./functions/firedumAdd"));
var firedumUpdate_1 = __importDefault(require("./functions/firedumUpdate"));
var firebaseCreateUser_1 = __importDefault(require("./functions/firebaseCreateUser"));
var fields = { firstName: '', lastName: '', age: 0 };
var OPTIONS = {
    collectionReference: firebase_1.fs.collection('test'),
    // item: { hej: 'hej' },
    fields: {
        name: 'n4m3',
        // lastName: 'lasting',
        age: 45,
        pay: 0,
    },
    numberOfItems: 2,
};
firedumAdd_1.default(OPTIONS);
firebaseCreateUser_1.default({ userFields: { 0: 'matheus', _0: 0 } });
// firestoreUpdate(OPTIONS)
exports.default = { firedumAdd: firedumAdd_1.default, firedumUpdate: firedumUpdate_1.default };
// fs.collection('test').add({ name: getRandomString(5) })
//# sourceMappingURL=index.js.map