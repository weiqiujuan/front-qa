function debounce(fn) {
    let time = null; //创建一个计时器
    return function() {
        clearTimeout(time) //当用户在时间内再次点击时，清除time
        time = setTimeout(() => { //重新计时
            fn.apply(this, arguments)
        }, 500)
    }
}

function sayHi() {
    console.log('防抖成功');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖

function debounce(fn, time) {
    let timer = null;
    return function () {
        if (timer) clearInterval(timer)
        timer = setTimeout(function () {
            fn.apply(this, arguments)
        }, timer)
    }
}