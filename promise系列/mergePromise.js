// 合并请求
const mergePromise = (ajaxArr) => {
    let data = [];
    let sequence = Promise.resolve();
    ajaxArr.forEach(item => {
        sequence = sequence.then(item).then((res) => {
            data.push(res)
            return data
        })
    })
    return sequence
}

// 设置几秒后请求
const setTime = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => setTime(2000).then(() => {
    console.log('1');
    return 1;
});
const ajax2 = () => setTime(1000).then(() => {
    console.log('2');
    return 2;
});
const ajax3 = () => setTime(200).then(() => {
    console.log('3');
    return 3;
});
const ajaxArr = [ajax1, ajax2, ajax3];
mergePromise(ajaxArr).then(data => {
    console.log('done', data)
})