//作为一个观察者
function DownloadTask(id) {
    this.id = id;
    this.loaded = false;
    this.url = null;
}
DownloadTask.prototype.finish = function(url) {
    this.loaded = true;
    this.url = url;
    console.log('Task ' + this.id + ' load data from ' + url)
}

//方便管理多个下载任务
function DownloadTaskList() {
    this.downloadTaskList = []
}
DownloadTaskList.prototype.getCount = function() {
    return this.downloadTaskList.length;
}
DownloadTaskList.prototype.get = function(index) {
    return this.downloadTaskList[index];
};
DownloadTaskList.prototype.add = function(obj) {
    return this.downloadTaskList.push(obj);
};
DownloadTaskList.prototype.remove = function(obj) {
    const downloadTaskCount = this.downloadTasks.getCount();
    while (i < downloadTaskCount) {
        if (this.downloadTaskList[i] === obj) {
            this.downloadTaskList.splice(i, 1)
            break;
        }
        i++
    }
}

//被观察目标
function Datahub() {
    this.downloadTasks = new DownloadTaskList()
}
Datahub.prototype.addDownloaadTask = function(downloadTask) {
    this.downloadTasks.add(downloadTask)
}
Datahub.prototype.removeDownloadTask = function(downloadTask) {
    this.downloadTasks.remove(downloadTask);
};
Datahub.prototype.notify = function(url) {
        const count = this.downloadTasks.getCount()
        for (let i = 0; i < count; i++) {
            this.downloadTasks.get(i).finish(url)
        }
    }
    //创建一个数据中心
var datahub = new Datahub()

//创建两个任务
var downloadTask1 = new DownloadTask(1)
var downloadTask2 = new DownloadTask(2)

//数据打包完成
datahub.notify('http://somedomain.someaddress');