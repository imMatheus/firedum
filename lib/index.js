"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firestoreAdd = exports.addition = void 0;
var firebase_1 = require("./firebase");
var getRandomString_1 = __importDefault(require("./utils/getRandomString"));
function addition(a, b) {
    return a + b;
}
exports.addition = addition;
function firestoreAdd(fsReference, fields, 
// item?: {},
numberOfItems) {
    var _a;
    numberOfItems = numberOfItems || 1;
    var data = {};
    for (var field in fields) {
        console.log(field);
        data = __assign(__assign({}, data), (_a = {}, _a[field] = getRandomString_1.default(5), _a));
    }
    for (var i = 0; i < numberOfItems; i++) {
        fsReference.add(data);
    }
}
exports.firestoreAdd = firestoreAdd;
var fields = { firstName: '', lastName: '', age: 0 };
firestoreAdd(firebase_1.fs.collection('test'), fields);
// fs.collection('test').add({ name: getRandomString(5) })
//# sourceMappingURL=index.js.map