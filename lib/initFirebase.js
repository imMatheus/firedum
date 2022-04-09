"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fs = exports.db = exports.auth = exports.app = void 0;
var auth_1 = require("firebase/auth");
var database_1 = require("firebase/database");
var firestore_1 = require("firebase/firestore");
var auth;
exports.auth = auth;
var db;
exports.db = db;
var fs;
exports.fs = fs;
var app;
exports.app = app;
function firedum(application) {
    exports.fs = fs = (0, firestore_1.getFirestore)(application);
    exports.auth = auth = (0, auth_1.getAuth)(application);
    exports.db = db = (0, database_1.getDatabase)(application);
    exports.app = app = application;
}
exports.default = firedum;
//# sourceMappingURL=initFirebase.js.map