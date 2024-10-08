// Given a strng, return a new string with the reversed order of characters
// -- Example
// reverse('hi') === 'ih';
// reverse('hello') === 'olleh';
// reverse('CodingMonkey') === 'yeknomgnidoC';

// system 1
// function reverse(str) {
// 	let reversed = '';

// 	for (let char = 0; char < str.length; char++) {
// 		reversed = str[char] + reversed;
// 	}

// 	return reversed;

// }

// console.log(reverse('hello'));

// system 2
// function reverse(str) {
// 	let reversed = '';

// 	for (char of str) {
// 		reversed = char + reversed;
// 	}

// 	return reversed;
// }

// console.log(reverse('hello'));

// system 3
function reverse(str) {
	return str.split('').reverse().join('');
}

console.log(reverse('hello'));
