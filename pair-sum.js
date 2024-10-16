const pairSum = (numbers, targetSum) => {
	// todo
	const arrIndicies = [];

	for (let i = 0; i < numbers.length; i++) {
		for (let j = 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === targetSum) {
				return [i, j];
			}
		}
	}
};

console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
/**
 * [1,2,3,4,5,6,7,8,9] looking for the sum of 20 from the array
 *
 * 1
 */
