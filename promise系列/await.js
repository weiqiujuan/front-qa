function sleep(wait) {
    return new Promise((res) => {
        setTimeout(() => {
            res(wait);
        }, wait);
    });
}

async function demo() {
    let result01 = await sleep(100);
    //上一个await执行之后才会执行下一句
    let result02 = await sleep(result01 + 100);
    let result03 = await sleep(result02 + 100);
    // console.log(result03);
    return result03;
}

demo().then(result => {
    console.log(result);
});

demo();
