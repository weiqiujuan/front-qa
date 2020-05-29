//定义：保证一个类只有一个实例，并提供访问此实例的全局访问点。
//用途：如果一个类负责连接数据库的线程池，日志记录逻辑等，此时需要单例模式保证对象不被重复创建。

const Singleton = function() {}

Singleton.getIntence = (function() {
    let instance = null;
    return function() {
        if (!instance) {
            instance = new Singleton()
        }
        return instance
    }
})()

let s1 = Singleton.getIntence()
let s2 = Singleton.getIntence()

console.log(s1 === s2)