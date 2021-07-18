// const sleep = time => {
// 	return new Promise(resolve => setTimeout(resolve, time))
// }
//
// sleep(1000).then(() => {
// 	console.log('1秒后输出')
// })
//
//
// async function output() {
// 	let out = await sleep(2000);
// 	console.log('2秒后输出');
// 	return out;
// }
//
// output();
//
// function* sleepGenerator(time) {
// 	yield new Promise(function (resolve, reject) {
// 		setTimeout(resolve, time);
// 	})
// }
//
// sleepGenerator(2000).next().value.then(() => {
// 	console.log('2秒后输出')
// })
//

// function getRandomIntInclusive(min, max) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	console.log(min, max)
// 	return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
// }
function getRandomIntInclusive(min, max) {
	// min = Math.ceil(min);
	// max = Math.floor(max);
	// console.log(min, max)
	return Math.random() * (max - min) + min; //含最大值，含最小值
}

const res = getRandomIntInclusive(12.12, 17.13)
console.log(res)
