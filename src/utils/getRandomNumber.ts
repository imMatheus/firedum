/**
 *
 * @param length - length of string
 */
export default function getRandomNumber(
	length: number,
	includeNegativeNumbers?: boolean
): number {
	const numbers = '0123456789';

	let value = '';
	for (let i = 0; i < length; i++) {
		const n = Math.floor(Math.random() * (numbers.length - 1));
		value += numbers[n];
	}
	if (includeNegativeNumbers) {
		if (Math.random() > 0.5) return Number(value);
		else return Number(value) * -1;
	}
	return Number(value);
}
