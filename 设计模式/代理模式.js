// // 小明通过B送花给A
// // B可以监听A的心情，以提高送花的成功率
// var Flower = function () {
// };
// var xiaoming = {
//     sendFlower: function (target) {
//         var flower = new Flower();
//         target.receiveFlower(flower);
//     }
// };
// var B = {
//     receiveFlower: function (flower) {
//         A.listenGoodMood(function () { // 监听A 的好心情
//             A.receiveFlower(flower);
//         });
//     }
// };
// var A = {
//     receiveFlower: function (flower) {
//         console.log('收到花 ' + flower);
//     },
//     listenGoodMood: function (fn) {
//         setTimeout(function () { // 假设1 秒之后A 的心情变好
//             fn();
//         }, 1000);
//     }
// };
// xiaoming.sendFlower(B);

// 虚拟代理：
var myImage = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return function (src) {
        imgNode.src = src;
    }
})();
var proxyImage = (function () {
    var img = new Image;
    img.onload = function () {
        myImage(this.src);
    }
    return function (src) {
        myImage('file:// /C:/Users/svenzeng/Desktop/loading.gif');
        img.src = src;
    }
})();
proxyImage('http://imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg');
// 缓存上报
const syncFile = (id) => {
    console.log('开始同步文件的id:' + id)
}
const proxySyncFile = (function () {
    let cache = [], timer;
    return function (id) {
        cache.push(id)
        if (timer) return
        timer = setTimeout(() => {
            syncFile(cache.join(','))// 2秒后向本体发送需要同步的id集合
            clearTimeout(timer)// 清空定时器
            timer = null
            cache.length = 0 //清空id集合
        }, 2000)
    }
})()
proxySyncFile(id)
