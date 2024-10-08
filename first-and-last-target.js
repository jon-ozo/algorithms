const arr = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 9];

function firstAndLastIndex(arr, target) {
	let i;
	let start;
	let end;
	const newArr = [];

	for (i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			start = i;
			break;
		}
	}

	while (i < arr.length) {
		if (arr[i] > target) {
			end = i - 1;
			break;
		}
		i++;
	}

	newArr.push(start, end);
	return newArr;
}

console.log(firstAndLastIndex(arr, 8));
