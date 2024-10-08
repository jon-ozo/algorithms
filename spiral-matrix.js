// [[1, 2, 3, 4][(12, 13, 14, 5)][(11, 16, 15, 6)][(10, 9, 8, 7)]];

function matrix(n) {
	const arr = [];
	const innerArr = [];
	let startRow, startCol, endRow, endCol;

	for (startRow = 1; startRow <= n; startRow++) {
		arr.push(innerArr.push(row));
	}

	for (endCol = startRow; endCol < row; col++) {
		arr.push(innerArr.push(col));
	}

	return arr;
}

console.log(matrix(4));
