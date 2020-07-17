// 但应用内页面跳转可转化为两个问题：
// 监听路由变化
// 判断变化的url是否为不同的页面

// historyApi
// hashHistory
// url的变化不一定页面发生变化，具体由路由配置决定

// 判断路由是否发生变化，可以判断是否调用了 History.pushState(),History.replaceState()，路由的变化一般会调用它两。
// popState只会在浏览器前进后退的时候触发。
let _wr = function (type) {
    let orig = window.history[type]
    return function () {
        let rv = orig.apply(this, arguments)
        let e = new Event(type.toLowerCase())
        e.arguments = arguments
        window.dispatchEvent(e)
        return rv
    }
}
window.history.pushState = _wr('pushState')
window.history.replaceState = _wr('replaceState')
window.addEventListener('pushstate', function (event) {
})
window.addEventListener('replacestate', function (event) {
})

// 监听页面活跃状态切换
// 可以通过pageVisibility Api以及在window上声明onblur/onfocus时间来处理
function activityPage() {
    // 在页面展现发生变化的时候，通过监听 visibilitychange 事件，通过hidden或者visibilityState来读取当前状态
    document.addEventListener('visibilitychange', function (event) {
        console.log(event.hidden, event.visibilityState)
    })
}

// 页面上报数据：
// 在页面内部跳转时及时上报