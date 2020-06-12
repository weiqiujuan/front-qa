//https://www.zhihu.com/question/23486749

//当一个对象的状态发生改变时，所有依赖他的对象都可以得到通知。

function DataHub() {}

DataHub.prototype.notify = function(url, callback) {
    callback(url)
}

//定义一个类作为事件通道
function DownloadManager() {
    this.events = {}
    this.uId = -1
}

//发布
DownloadManager.prototype.publish = function(eventType, url) {
    if (!this.events[eventType]) {
        return false
    }
    let subscribers = this.events[eventType]
    let count = subscribers ? subscribers.length : 0
    while (count--) {
        var subscriber = subscribers[count]
        subscriber.handler(eventType, subscriber.taskId, url)
    }
}

//订阅
DownloadManager.prototype.subscribe = function(eventType, handler) {
    if (!this.events[eventType]) {
        this.events[eventType] = []
    }
    var taskId = (++this.uId).toString()
    this.events[eventType].push({
        taskId: taskId,
        handler: handler
    })
    return taskId;
}

//创建一个数据中心
var dataHub = new DataHub()

//创建一个下载时间管理器
var downloadManager = new DownloadManager()

//创建下载器
var dataLoader = function(eventType, taskId, url) {
    console.log('Task' + taskId + 'load dara from,' + url)
}

//用户来请求数据
var downloadTask1 = downloadManager.subscribe('dataReady', dataLoader)

//数据打包完成
dataHub.notify('http://somedomain.someaddress', function(url) {
    downloadManager.publish('dataReady', url)
})