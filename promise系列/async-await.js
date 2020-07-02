let visitedUrl = async (url) => {
    await url && urlFun(url)
    return {
        code: 200,
        message: 'success'
    }
}
const url = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
const urlFun = (url) => {
    const img = new Image();
    img.src = url
}
visitedUrl('xiaomi').then((res) => {
    return res.code === 200 ? console.log(res.message) : console.log('失败')
})

// 使用存储promise对象变量的方法，减缓代码的阻塞
function timePromise(interval) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done')
        }, interval)
    })
}

async function timeTest() {
    // await timePromise(3000);
    // await timePromise(3000);
    // await timePromise(3000);

    const timeoutPromise1 = timePromise(3000);
    const timeoutPromise2 = timePromise(3000);
    const timeoutPromise3 = timePromise(3000);

    await timeoutPromise1;
    await timeoutPromise2;
    await timeoutPromise3;
}

let time = Date.now()
timeTest().then(() => {
    let endTime = Date.now();
    console.log('Time taken in milliseconds:', endTime - time)
})

// 可以在类/对象方法前面添加async，以使它们返回promises，并await它们内部的promises
class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    async greeting() {
        return `Hi! I'm ${this.name.first}`;
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting().then(console.log)
han.farewell()


