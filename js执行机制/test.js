console.log('代码执行开始1');
setTimeout(function(){
    console.log('定时器开始了2')
});

new Promise(function(resolve){
    console.log('马上执行for循环了3');
    resolve()
}).then(function(){
    console.log('执行then函数了4')
});

console.log('代码执行结束5');//1,3,5,4,2