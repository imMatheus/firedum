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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var getRandomString_1 = __importDefault(require("../utils/getRandomString"));
var faker_1 = __importDefault(require("../faker"));
var initFirebase_1 = __importStar(require("../initFirebase"));
/**
 * @param {number} amountOfUsers - amount of users to be added *defaults to 1
 * @param {Object} userFields - Object storing additional data about each added user
 * @param {CollectionReference} usersCollectionReference - a reference to a users collection to store additional data about user
 * @returns {Object} {data, ids, collectionReference }
 */
function firedumCreateUser(_a) {
    var _b = _a.amountOfUsers, amountOfUsers = _b === void 0 ? 1 : _b, fields = _a.fields, collectionReference = _a.collectionReference;
    return __awaiter(this, void 0, void 0, function () {
        var data, ids, _loop_1, i, state_1;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!initFirebase_1.default) {
                        throw new Error("firedumCreatUser requires that you have initialized your app to firedum. \n            To do this, follow the following instructions:\n            1. import firedum from \"firedum\"\n            2. call firedum the firedum with your firebase app as its argument, e.g firedum(app)\n            \n            ");
                    }
                    if (!initFirebase_1.auth)
                        throw new Error('You app has not been initialized with firedum or you have not initialized authentication for your app');
                    data = [];
                    ids = [];
                    _loop_1 = function (i) {
                        var password, email, error_1;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    password = getRandomString_1.default(16);
                                    email = getRandomString_1.default(12) + '@' + getRandomString_1.default(12) + '.com';
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, initFirebase_1.auth.createUserWithEmailAndPassword(email, password).then(function (currentUser) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a, _b, _i, field, value;
                                            var _c;
                                            return __generator(this, function (_d) {
                                                switch (_d.label) {
                                                    case 0:
                                                        if (!(fields && currentUser && collectionReference)) return [3 /*break*/, 8];
                                                        _a = [];
                                                        for (_b in fields)
                                                            _a.push(_b);
                                                        _i = 0;
                                                        _d.label = 1;
                                                    case 1:
                                                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                                                        field = _a[_i];
                                                        value = faker_1.default.firstName();
                                                        if (!(fields[field].split(':').length > 1)) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, faker_1.default[fields[field].split(':')[1]]()];
                                                    case 2:
                                                        value = _d.sent();
                                                        fields[field] = value;
                                                        return [3 /*break*/, 6];
                                                    case 3:
                                                        if (!!fields[field]) return [3 /*break*/, 6];
                                                        if (!faker_1.default[field]) return [3 /*break*/, 5];
                                                        if (!faker_1.default[field]()) return [3 /*break*/, 5];
                                                        return [4 /*yield*/, faker_1.default[field]()];
                                                    case 4:
                                                        value = _d.sent();
                                                        _d.label = 5;
                                                    case 5:
                                                        fields[field] = value;
                                                        _d.label = 6;
                                                    case 6:
                                                        _i++;
                                                        return [3 /*break*/, 1];
                                                    case 7:
                                                        data.push(__assign({ password: password, email: email }, fields));
                                                        if ((_c = currentUser === null || currentUser === void 0 ? void 0 : currentUser.user) === null || _c === void 0 ? void 0 : _c.uid) {
                                                            ids.push(currentUser.user.uid);
                                                            collectionReference.doc(currentUser.user.uid).set(__assign({ password: password, email: email }, fields));
                                                        }
                                                        _d.label = 8;
                                                    case 8: return [2 /*return*/];
                                                }
                                            });
                                        }); })];
                                case 2:
                                    _d.sent();
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_1 = _d.sent();
                                    console.error(error_1);
                                    return [2 /*return*/, { value: error_1 }];
                                case 4: return [2 /*return*/];
                            }
                        });
                    };
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < amountOfUsers)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(i)];
                case 2:
                    state_1 = _c.sent();
                    if (typeof state_1 === "object")
                        return [2 /*return*/, state_1.value];
                    _c.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, { data: data, ids: ids, reference: collectionReference }];
            }
        });
    });
}
exports.default = firedumCreateUser;
//# sourceMappingURL=firedumCreateUser.js.map