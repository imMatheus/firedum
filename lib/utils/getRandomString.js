"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param length - length of string
 */
function getRandomString(length, includeNumbers) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var upperCaseAlphabet = alphabet // converts it into uppercase
        .split('')
        .map(function (c) { return c.toUpperCase(); })
        .join('');
    var numbers = includeNumbers ? '0123456789' : '';
    var characters = alphabet + upperCaseAlphabet + numbers; // combine all of them into one string
    var value = '';
    for (var i = 0; i < length; i++) {
        var n = Math.floor(Math.random() * characters.length);
        value += characters[n];
    }
    return value;
}
exports.default = getRandomString;
//# sourceMappingURL=getRandomString.js.map