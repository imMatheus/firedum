'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
/**
 *
 * @param length - length of string
 */
function getRandomNumber(length, includeNegativeNumbers) {
	var numbers = '0123456789';
	var value = '';
	for (var i = 0; i < length; i++) {
		var n = Math.floor(Math.random() * (numbers.length - 1));
		value += numbers[n];
	}
	if (includeNegativeNumbers) {
		if (Math.random() > 0.5) return Number(value);
		else return Number(value) * -1;
	}
	return Number(value);
}
exports.default = getRandomNumber;
//# sourceMappingURL=getRandomNumber.js.map
