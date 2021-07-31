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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomNumber_1 = __importDefault(require("../utils/getRandomNumber"));
var getRandomString_1 = __importDefault(require("../utils/getRandomString"));
var firebase_1 = require("../firebase");
/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} userFields - Object storing additional data about each added user
 * @param {CollectionReference} usersCollectionReference - a reference to a users collection to store additional data about user
 * @returns
 */
function firedumCreateUser(_a) {
    var _b = _a.amountOfUsers, amountOfUsers = _b === void 0 ? 1 : _b, userFields = _a.userFields, usersCollectionReference = _a.usersCollectionReference;
    return __awaiter(this, void 0, void 0, function () {
        var i, password, email, data, field, fieldType, value, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('runner');
                    // if (amountOfUsers && typeof amountOfUsers !== 'number')
                    //     throw new Error('amountOfUsers is not a number ')
                    console.log('started');
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < amountOfUsers)) return [3 /*break*/, 10];
                    password = getRandomString_1.default(16);
                    email = getRandomString_1.default(12) + '@' + getRandomString_1.default(12) + '.com';
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 8, , 9]);
                    return [4 /*yield*/, firebase_1.auth.createUserWithEmailAndPassword(email, password)];
                case 3:
                    _c.sent();
                    if (!userFields) return [3 /*break*/, 7];
                    data = {};
                    for (field in userFields) {
                        // if the field has a truthy value wh don't change it
                        if (userFields[field]) {
                            data[field] = userFields[field];
                        }
                        else {
                            fieldType = typeof userFields[field] // get the typeof the value
                            ;
                            value = getRandomString_1.default(5) // defaults to a string
                            ;
                            // if it is a number
                            if (fieldType === typeof 1)
                                value = getRandomNumber_1.default(4);
                            // if it is a string
                            else if (fieldType === typeof '')
                                value = getRandomString_1.default(5);
                            data[field] = value; // overwrite teh previus value with the new random value
                        }
                    }
                    if (!(usersCollectionReference &&
                        typeof usersCollectionReference === typeof firebase_1.fs.collection('users'))) return [3 /*break*/, 5];
                    return [4 /*yield*/, usersCollectionReference.add(__assign({ password: password, email: email }, data))];
                case 4:
                    _c.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, firebase_1.fs.collection('users').add(__assign({ password: password, email: email }, data))];
                case 6:
                    _c.sent();
                    _c.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _c.sent();
                    return [2 /*return*/, error_1];
                case 9:
                    i++;
                    return [3 /*break*/, 1];
                case 10:
                    console.log('end of run');
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = firedumCreateUser;
//# sourceMappingURL=firebaseCreateUser.js.map