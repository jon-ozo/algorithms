// Given an integer, return an integer that is the reverse
// ordering of numbers.
// -- Examples
// reverseInt(15) === 51;
// reverseInt(981) === 189;
// reverseInt(500) === 5;
// reverseInt(-15) === -51;
// reverseInt(-90) === 9;

function reverseInt(int) {
	let intToString = int.toString().split('').reverse().join('');

	return parseInt(intToString) * Math.sign(int);
}

console.log(reverseInt(-90));
