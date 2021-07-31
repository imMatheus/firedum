"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("./firebase");
var firestoreAdd_1 = __importDefault(require("./functions/firestoreAdd"));
var fields = { firstName: '', lastName: '', age: 0 };
var OPTIONS = {
    collectionReference: firebase_1.fs.collection('test'),
    // item: { hej: 'hej' },
    fields: {
        name: 'n4m3',
        lastName: 'lasting',
        age: 45,
    },
    numberOfItems: 10,
};
firestoreAdd_1.default(OPTIONS);
exports.default = { firestoreAdd: firestoreAdd_1.default };
// fs.collection('test').add({ name: getRandomString(5) })
//# sourceMappingURL=index.js.map