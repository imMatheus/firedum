"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fs = exports.db = exports.auth = exports.app = void 0;
var auth;
exports.auth = auth;
var db;
exports.db = db;
var fs;
exports.fs = fs;
var storage;
var app;
exports.app = app;
function firedum(application) {
    exports.fs = fs = application.firestore();
    exports.auth = auth = application.auth();
    exports.db = db = application.database();
    // storage = firebase.storage()
    exports.app = app = application;
}
exports.default = firedum;
//# sourceMappingURL=initFirebase.js.map