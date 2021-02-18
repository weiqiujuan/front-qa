Promise.resolve().then(()=>{
	// 微任务1
	console.log('Promise1')
	// 宏任务队列2
	setTimeout(()=>{
		console.log('setTimeout2')
	},0)
});
// 宏任务队列1
setTimeout(()=>{
	console.log('setTimeout1')
	// 微任务
	Promise.resolve().then(()=>{
		console.log('Promise2')
	})
},0);
