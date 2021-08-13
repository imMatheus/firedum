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
var faker_1 = __importDefault(require("../faker"));
/**
 * @param {collectionReference} collectionReference - reference to a firestore collection.
 * @param {Object} fields - the fields to be added to each document
 * @param {Object} numberOfDocuments - the number of documents to be added th teh collection
 * @param {Array<Object>} documents - if passed, firedum will add all of the documents given and ignores the numberOfDocuments variable
 * @returns {Array, Array, collectionReference} {data, ids, collectionReference }
 */
function firedumAdd(_a) {
    var collectionReference = _a.collectionReference, fields = _a.fields, _b = _a.numberOfDocuments, numberOfDocuments = _b === void 0 ? 1 : _b, // default is 1
    documents = _a.documents;
    return __awaiter(this, void 0, void 0, function () {
        var data, i, _c, _d, _i, field, value, ids_1, ids_2;
        var _this = this;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!collectionReference)
                        throw new Error('Please provide a firestore collection reference'); // collectionReference is required
                    if (!fields && !documents)
                        throw new Error('Please provide at least one field to fields or an array of documents'); // required
                    if (documents && documents.length > 0) {
                        numberOfDocuments = documents.length; // we only want to add the given docs, not more or less
                    }
                    data = [];
                    i = 0;
                    _e.label = 1;
                case 1:
                    if (!(i < numberOfDocuments)) return [3 /*break*/, 10];
                    _c = [];
                    for (_d in fields)
                        _c.push(_d);
                    _i = 0;
                    _e.label = 2;
                case 2:
                    if (!(_i < _c.length)) return [3 /*break*/, 8];
                    field = _c[_i];
                    value = faker_1.default.firstName();
                    if (!(fields[field].split(':').length > 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, faker_1.default[fields[field].split(':')[1]]()];
                case 3:
                    value = _e.sent();
                    fields[field] = value;
                    return [3 /*break*/, 7];
                case 4:
                    if (!!fields[field]) return [3 /*break*/, 7];
                    if (!faker_1.default[field]) return [3 /*break*/, 6];
                    if (!faker_1.default[field]()) return [3 /*break*/, 6];
                    return [4 /*yield*/, faker_1.default[field]()];
                case 5:
                    value = _e.sent();
                    _e.label = 6;
                case 6:
                    fields[field] = value;
                    _e.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 2];
                case 8:
                    // any given field to the document will override what gets passed by in fields
                    if (documents)
                        documents[i] = __assign(__assign({}, fields), documents[i]);
                    else
                        data.push(fields);
                    _e.label = 9;
                case 9:
                    i++;
                    return [3 /*break*/, 1];
                case 10:
                    if (!documents) return [3 /*break*/, 12];
                    ids_1 = [];
                    return [4 /*yield*/, Promise.all(documents.map(function (doc) {
                            var id = collectionReference.doc().id;
                            ids_1.push(id);
                            collectionReference.doc(id).set(doc);
                        }))];
                case 11:
                    _e.sent();
                    return [2 /*return*/, { documents: documents, ids: ids_1, reference: collectionReference }];
                case 12:
                    ids_2 = [];
                    return [4 /*yield*/, Promise.all(data.map(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                            var id;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id = collectionReference.doc().id;
                                        ids_2.push(id);
                                        return [4 /*yield*/, collectionReference.doc(id).set(doc)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 13:
                    _e.sent();
                    return [2 /*return*/, { data: data, ids: ids_2, reference: collectionReference }];
            }
        });
    });
}
exports.default = firedumAdd;
//# sourceMappingURL=firedumAdd.js.map