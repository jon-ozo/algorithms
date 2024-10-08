// for (let i = 5; i <= 10; i++) console.log(i);

// for (let i = 12; i < 40; i += 2) console.log(i);
// for (let i = 11; i <= 40; i += 2) console.log(i);

// let loggedIn = false;

// for (let count = 0; loggedIn !== true; count++) {
// 	console.log('Incorrect login credentials');

// 	if (count === 2) {
// 		loggedIn = true;
// 	}
// }

// console.log('Successfully logged in');

for (let count = 10; count <= 100; count += 10) {
	if (count === 50) {
		console.log('Half way there!');
		continue;
	}
	if (count === 100) {
		console.log('You made it!');
		continue;
	}

	console.log('Checkpoint! - ', count);
}

console.log('All done!');
