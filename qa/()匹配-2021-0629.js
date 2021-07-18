// function validateText(str) {
//     let stack = [];
//     let textLength = str.length; // 取出文本长度
//     for (let i = 0; i < textLength; i++) {
//         if (!!stack.length && (stack[stack.length - 1] === "(" && str[i] === ")")) {
//             stack.pop();
//         } else{
//             stack.push(str[i]);
//         }
//     }
//     return !stack.length;
// }
//
// console.log(validateText('(()(())))'))


var isValid = function (s) {
	s = s.split('');
	let sl = s.length;
	if (sl % 2) return false;
	let map = new Map([[')', '('], [']', '['], ['}', '{']]);
	let stack = [];
	for (let i of s) {
		if (map.get(i)) {
			if (stack[stack.length - 1] !== map.get(i)) return false;
			else stack.pop();
		} else {
			stack.push(i);
		}
	}
	return !stack.length;
};
console.log(isValid('(()(())))}'))


var isValidRegex = function (s) {
	if (s.length % 2) return false;
	const regex = /\{\}|\(\)|\[\]/;
	while (s.match(regex)) {
		s = s.replace(regex, '');
	}
	return !s.length;
};


const testValid = (str) => {
	if (str.length % 2) return false
	let map = {
		'}': '{',
		']': '[',
		')': '(',
	}
	let stack = [];
	for (let item of str) {
		if (map[item]) {
			if (stack[stack.length - 1] !== map[item]) return false
			else stack.pop()
		} else {
			stack.push(item)
		}
	}
	return !stack.length
}
