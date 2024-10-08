// Given a string, return true if the string is a palindrome
// or false if it isn't. Palindromes are stings that form
// the same word if it is reversed.

// -- Examples
// palindrome('kayak) === true;
// palindrome('madam) === true;
// palindrome('codingmoney') === false

function palindrome(str) {
	const strReversed = str.split('').reverse().join('');

	return str === strReversed;
}

console.log(palindrome('Kayak'));

// matching the case of the string
function palindrome(str) {
	const strToLowerCase = str.toLowerCase();
	const strReversed = str.split('').reverse().join('').toLowerCase();

	return strToLowerCase === strReversed;
}

console.log(palindrome('codingmoney'));

// assignment
// solve the above problem using a 2 pointer technique
// or using the built in every() method
