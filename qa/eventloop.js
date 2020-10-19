console.log(1)
setTimeout(() => {
    console.log(2)
    Promise.resolve().then(data => {
        console.log(3)
    })
})
new Promise(resolve => {
    resolve()
    console.log(4)
}).then(() => {
    console.log(5)
    setTimeout(() => {
        console.log(6)
    })
}).then(() =>
    console.log(7)
)
console.log(8)
// 14857236
