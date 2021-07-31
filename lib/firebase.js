"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = exports.fs = void 0;
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
var app = app_1.default.initializeApp({
    apiKey: 'AIzaSyA3aMd0oKHH1vCN3OxEugzVwJhtfN2D2PQ',
    authDomain: 'firedum-testing.firebaseapp.com',
    databaseURL: 'https://firedum-testing-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'firedum-testing',
    storageBucket: 'firedum-testing.appspot.com',
    messagingSenderId: '575721810932',
    appId: '1:575721810932:web:175ec24b0619926abca7a1',
});
exports.fs = app_1.default.firestore();
exports.auth = app.auth();
exports.db = app.database();
exports.default = app;
//# sourceMappingURL=firebase.js.map