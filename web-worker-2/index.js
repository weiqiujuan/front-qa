/**
 * Web Worker
 * 在火狐中可以直接打开测试，在 Chrome 中需要起服务器
 */
var i = 0;

function timedCount() {
    i = i + 1;

    console.log('window 对象为:', typeof window)
    console.log('global 对象为:', typeof global)
    console.log('self 对象为：', self)
    postMessage(i);
    setTimeout("timedCount()", 1500);
}

timedCount();