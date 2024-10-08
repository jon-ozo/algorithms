// Wrie a function that returns the number of vowels used
// in a string. Vowels are the characters 'a', 'e', 'i','o', 'u'.
// --Examples
// vowels('Hi There') --> 3
// vowels('How are you') --> 5
// vowels('Coding Money') --> 4
// vowels('Why?') --> 0

// Solution 1
// function vowels(str) {
// 	str = str.toLowerCase().replace(/[\W]/g, '').split('');
// 	const numberOfVowels = [];

// 	for (const char of str) {
// 		if (
// 			char === 'a' ||
// 			char === 'e' ||
// 			char === 'i' ||
// 			char === 'o' ||
// 			char === 'u'
// 		) {
// 			numberOfVowels.push(char);
// 		}
// 	}

// 	return numberOfVowels.length !== 0 ? numberOfVowels.length : 0;
// }

// Solution 2
// function vowels(str) {
// 	const vowelArr = str.match(/[aeiou]/gi);
// 	if (vowelArr) return vowelArr.length;

// 	return null;
// }
// vowels('Coding Money');

// Solution 3
function vowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;

	for (const char of str.toLowerCase()) {
		vowels.includes(char) ? count++ : 0;
	}

	return count;
}

console.log(vowels('Coding Money'));
