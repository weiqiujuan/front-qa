//就是把new对象的操作包裹一层，对外提供一个可以根据不同参数创建不同对象的函数
//向工厂类中传递参数，来获取对应的实体。具体类的创建，均由工厂类全权负责。

//https://juejin.im/post/5b69c699e51d45348a301ef4  一些使用
//react的createElement()方法就是一个工厂模式

//实体类
class Dog {
	run() {
		console.log('wangwangwang')
	}
}

class Cat {
	run() {
		console.log('miaomiaomiao')
	}
}

//工厂类

class Animal {
	constructor(name) {
		name = name.toLocaleLowerCase()
		switch (name) {
			case 'dog':
				return new Dog();
			case "cat":
				return new Cat();
			default:
				throw TypeError("class name wrong");
		}
	}
}

//test

const cat = new Animal('cat')
cat.run()
const dog = new Animal('dog')
dog.run()
