"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomNumber_1 = __importDefault(require("../utils/getRandomNumber"));
var getRandomString_1 = __importDefault(require("../utils/getRandomString"));
function firestoreAdd(_a) {
    var collectionReference = _a.collectionReference, fields = _a.fields, item = _a.item, _b = _a.numberOfItems, numberOfItems = _b === void 0 ? 1 : _b;
    if (!fields && !item)
        throw new Error('please provide at least item fields or an item object');
    var data = {};
    for (var field in fields) {
        if (fields[field]) {
            data[field] = fields[field];
        }
        else {
            var fieldType = typeof fields[field];
            var value = getRandomString_1.default(5);
            if (fieldType === typeof 1)
                value = getRandomNumber_1.default(4);
            else if (fieldType === typeof '')
                value = getRandomString_1.default(5);
            data[field] = value;
        }
    }
    for (var i = 0; i < numberOfItems; i++) {
        collectionReference.add(item || data);
    }
}
exports.default = firestoreAdd;
//# sourceMappingURL=firestoreAdd.js.map