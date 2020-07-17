// const nextClick = new Promise(resolve => {
//     link.addEventListener('click', resolve, { once: true });
// });
//
// nextClick.then(event => {
//     event.preventDefault();
// })

// promise虽然是异步的,但是以上并不会错过调用event.preventDefault();

// link.click(); //执行操作就不可能完成

//单击链接的描述:
// 1. new ClickObject(); 创建一个事件对象,
// 2. event listeners 调用每一个监听器,传入事件对象
// 3. canceled flag:  检查事件对象的canceled属性.如果canceled,跳转失败
//             如果跳转成功,打开链接,调用event.preventDefault();
//             事件就会标记成canceled.
// 微任务会在每次回调后发生,js堆栈清空
// 如果使用js.click(),即在执行完链接点击的操作,js堆栈不会清空.微任务不会发生.


// 如果浏览器允许0ms,会导致js引擎过度循环，也就是说如果浏览器架构是单线程，
// 那么网页很可能无响应，浏览器本身也是建立在eventLoop上的,如果速度很慢的js-engine通过0 不断安排唤醒系统，eventLoop就会被阻塞。
function testSetTimeOut() {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        console.log('嵌套在第五层')
                    }, 0)
                }, 0)
            }, 0)
        }, 0)
    }, 0)
}

console.time()
testSetTimeOut()
console.timeEnd()


















