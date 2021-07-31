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
Object.defineProperty(exports, "__esModule", { value: true });
function firestoreUpdate(_a) {
    var collectionReference = _a.collectionReference, fields = _a.fields;
    collectionReference.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            collectionReference.doc(doc.id).update(__assign({}, fields));
        });
    });
}
exports.default = firestoreUpdate;
//# sourceMappingURL=firestoreUpdate.js.map