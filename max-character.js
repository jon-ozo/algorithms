// Given a string, return the character that is most
// commonly used in the string.
// --Examples
// maxChar('abcccccccd') === 'c';
// maxChar('apple 1231111') === '1';

function maxChar(chars) {
	let obj = {};
	let maxValue = 0;
	let maxProp = '';

	// not good for loops
	// for (let char of chars) {
	// 	if (obj[char]) obj[char] = obj[char] + 1;

	// 	obj[char] = 1;

	// }

	for (let char of chars) {
		obj[char] = ++obj[char] || 1;
	}

	for (let key in obj) {
		if (obj[key] > maxValue) {
			maxValue = obj[key];
			maxProp = key;
		}
	}

	return maxValue + ' ' + maxProp;
}

console.log(maxChar('abbbbbccccdddddd'));
