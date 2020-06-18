const log = console.log.bind(console)

function Animal(name) {
    this.name = name
    this.feature = {
        one: 'sleep',
        two: 'eat'
    }
    this.age = function age(age) {
        log(name + '今年' + age + '岁')
    }
}

// 原型上增加吃的方法
Animal.prototype.eat = function(food) {
    log(this.name + '正在吃' + food);
}

Animal.prototype.eatArrow = (food) => {
    log(this.name + '正在吃' + food);
}

function dogWang() {

}

dogWang.prototype = new Animal('dogWang')
dogWang.prototype.name = 'dogXiaowang'
const dog = new dogWang()
log(dog.feature['one'])
log(dog.name)
log(dog.eat('wangwang'))
log(dog.eatArrow('wangwang'))
log(dogWang.prototype)
