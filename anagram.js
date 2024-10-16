// Check to see if 2 provided strings are anagrams of eachother
// 1 string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces or
// punctuation. Consider capital letters to be the same as
// lower case
// --Example
// anagrams('coding money', 'money coding') --> true
// anagrams('RAIL! SAFETY', 'fairy tales') --> true
// anagrams('there Hi', 'there Bye') --> false

// Solution 1
// function stringConversion(str) {
// 	const strObj = {};
// 	const newString = str.toLowerCase().replace(/[\W]/g, '').split('');

// 	for (const char of newString) {
// 		strObj[char] = strObj[char] + 1 || 1;
// 	}

// 	return strObj;
// }

// function anagram(stringA, stringB) {
// 	const newStringA = stringConversion(stringA);
// 	const newStringB = stringConversion(stringB);
// 	let diffChar = '';
// 	console.log(newStringA);
// 	console.log(newStringB);

// 	for (const key in newStringA) {
// 		if (newStringA[key] === newStringB[key]) {
// 			diffChar += 'Value';
// 		} else {
// 			diffChar = '';
// 		}
// 	}

// 	if (diffChar) return true;

// 	return false;
// }

// Solution 2
// function stringConversion(str) {
// 	return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
// }

// function anagram(stringA, stringB) {
// 	return stringConversion(stringA) === stringConversion(stringB);
// }

// solution 3
function anagram(strA, strB) {
	const newStrA = strA.toLowerCase().replace(/[\W]/g, '');
	const newStrB = strB.toLowerCase().replace(/[\W]/g, '');
	const charObj = {};

	for (char of newStrA) {
		if (!(char in charObj)) {
			charObj[char] = 0;
		}
		charObj[char] += 1;
	}

	for (char of newStrB) {
		if (char in charObj) {
			charObj[char] -= 1;
		} else {
			return false;
		}
	}

	for (char in charObj) {
		if (charObj[char] > 0) return false;
	}

	return true;
}

console.log(anagram('RAIL! SAFETYh', 'hbx'));
// console.log(anagram('RAIL! SAFETY', 'fairy tales'));

/**
 * {
 *    r: 1, a:2, i:1, l:1, s:1, f:1, e:1, t:1, y:1
 * }
 *
 */
