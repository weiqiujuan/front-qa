const addStrings = (num1, num2) => {
	let i = num1.length - 1, j = num2.length - 1, add = 0;
	const res = []
	while (i >= 0 || j >= 0 || add !== 0) {
		let first = i >= 0 ? num1.charAt(i) - '0' : 0
		let second = j >= 0 ? num2.charAt(j) - '0' : 0
		let result = first + second + add
		res.push(result % 10)
		add = Math.floor(result / 10)
		i--;
		j--;
	}
	return res.reverse().join('')
}
