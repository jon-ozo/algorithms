// Write a function that accepts a positive number N. The
// function should console log a step shape with N levels
// using the # character. Make sure the step has spaces
// on the right and side.
// --Examples
// steps(2)
// '# '
// '##'
// steps(3)
// '# '
// '## '
// '###'
// steps(4)
// '# '
// '## '
// '### '
// '####'

function steps(n) {
	let row;
	let col;

	if (n < 0) {
		console.log('Not a positive number');
	} else {
		for (row = 1; row <= n; row++) {
			let hashSign = '#';
			for (col = 1; col <= n; col++) {
				col >= row ? (hashSign += ' ') : (hashSign += '#');
			}
			console.log(hashSign);
		}
	}
}

steps(12);
