// 实现一个批量请求函数 multiRequest(urls, maxNum)
//
//  要求如下：
// 要求最大并发数 maxNum
// 每当有一个请求返回，就留下一个空位，可以增加新的请求
// 所有请求完成后，结果按照 urls 里面的顺序依次打出
const maxNum = (urls, maxNum) => {
    const firstMaxNum = urls.splice(0, maxNum);
    let promises = firstMaxNum.map((url, index) => {
        loadImg(url).then(() => {
            return index
        })
    })
    //  没明白！
    return urls.reduce((res, cur) => {
        return res.then(() => {
            return Promise.race(promises)
        }).then((idx) => {
            promises[idx] = loadImg(cur).then(() => {
                return idx
            })
        })
    }, Promise.resolve()).then(() => {
        return Promise.all(promises)
    })
}
const loadImg = (url) => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(new Error('Error at:' + url))
        }
        img.src = url
    })
}
const urls = ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
]
maxNum(urls, 2).then(() => {
        console.log('finish')
    }
)