let students = {
		[Symbol.iterator]: function* () {
				for (let i = 0; i <= 10; i++) {
						yield i;
				}
		}
}
for (const s of students) {
		console.log(s);
}