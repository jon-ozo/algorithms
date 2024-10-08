// Write a program that console logs the numbers from 1 to n.
// But for multiples of 3 print 'fizz' instead of the number
// and for multiples of 5 print 'buzz'. For numbers which are
// multiples of both 3 and 5 print 'fizzbuzz'.
// --Examples
// fizzbuzz(5);
// 1
// 2
// fizz
// 4
// buzz

// Solution 1
function fizzbuzz(n) {
	let count;

	for (count = 1; count <= n; count++) {
		if (count % 3 === 0) {
			console.log('Fizz');
		} else if (count % 5 === 0) {
			console.log('Buzz');
		} else if (count % 3 === 0 && count % 5 === 0) {
			console.log('FizzBuzz');
		} else {
			console.log(count);
		}
	}
}

// Solution 2
// function fizzbuzz(n) {
// 	let count;

// 	for (count = 1; count <= n; count++) {
// 		if (count % 3 === 0) {
// 			console.log('Fizz');
// 			continue;
// 		}
// 		if (count % 5 === 0) {
// 			console.log('Buzz');
// 			continue;
// 		}
// 		if (count % 3 === 0 && count % 5 === 0) {
// 			console.log('FizzBuzz');
// 			continue;
// 		} else {
// 			console.log(count);
// 		}
// 	}
// }

fizzbuzz(20);
