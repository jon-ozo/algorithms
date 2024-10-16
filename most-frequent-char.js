const mostFrequentChar = (s) => {
	// todo
	const charCount = {};
	let count = 0;
	let highestCharCount;

	for (char of s) {
		if (!charCount[char]) {
			charCount[char] = 0;
		}

		charCount[char] += 1;
	}

	for (char in charCount) {
		if (count < charCount[char]) {
			count = charCount[char];
			console.log(charCount);
			console.log(count);
			highestCharCount = char;
		}
	}

	return highestCharCount;
};

console.log(mostFrequentChar('bookeeper'));
