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
    apiKey: 'AIzaSyClWTsJ3jIfMbDEfGHJCFagefp8bDagYZA',
    authDomain: 'firedum-bb.firebaseapp.com',
    projectId: 'firedum-bb',
    storageBucket: 'firedum-bb.appspot.com',
    messagingSenderId: '393856153273',
    appId: '1:393856153273:web:cfc20368cc44867e490d68',
});
exports.fs = app_1.default.firestore();
exports.auth = app.auth();
exports.db = app.database();
exports.default = app;
//# sourceMappingURL=firebase.js.map