// Write a function that accepts a string. The function should
// capitalize the first letter of each word in the string
// then return the capitalized string.
// --Examples
// capitalize('this is john the software engineer') --> 'This Is John The Software Engineer'
// capitalize('what is titlecase?') --> 'What Is Titlecase?'
// capitalize('titles of books, movies, songs, plays and other works') --> 'Titles Of Books, Movies, Songs, Plays And Other Works'

// first soluton
// function capitalize(str) {
// 	const words = str.split(' ');
// 	const arr = [];
// 	for (let word of words) {
// 		const newWord = word[0].toUpperCase() + word.slice(1);
// 		arr.push(newWord);
// 	}

// 	return arr.join(' ');
// }

// console.log(capitalize('this is john the software engineer'));

// Second solution
function capitalize(str) {
	const words = str.split(' ');

	return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize('this is john the software engineer'));
