pow.calculated = {};

function pow(x, y) {
	let total = 1;
	let memoizedValue = x + ' , ' + y;

	if (pow.calculated[memoizedValue]) {
		console.log('RETURN ALREADY EXISTING VALUES');
		return pow.calculated[memoizedValue];
	}

	for (let i = 0; i < y; i++) {
		total *= x;
	}

	pow.calculated[memoizedValue] = total;
	return total;
}

console.log(pow(2, 2));
console.log(pow(2, 2));
console.log(pow(3, 2));
console.log(pow(3, 2));
