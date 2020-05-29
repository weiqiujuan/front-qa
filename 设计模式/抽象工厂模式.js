//一个超级类中会创建两个或者多个工厂类。

//实体类
class Dog {
    run() {
        console.log("狗");
    }
}

class Cat {
    run() {
        console.log("猫");
    }
}

class Male {
    run() {
        console.log("男性");
    }
}

class Female {
    run() {
        console.log("女性");
    }
}
//抽象工厂类

class AbstractFactroy {
    getPerson() {
        throw new Error("子类请实现接口");
    }
    getAnimal() {
        throw new Error("子类请实现接口");
    }
}

class Person extends AbstractFactroy {
    getPerson(person) {
        person = person.toLocaleLowerCase()
        switch (person) {
            case 'male':
                return new Male()
            case 'female':
                return new Female()
            default:
                break
        }
    }
    getAnimal() {
        return null;
    }
}

class Animal extends AbstractFactroy {
    getPerson() {
        return null;
    }
    getAnimal(animal) {
        animal = animal.toLocaleLowerCase();
        switch (animal) {
            case "cat":
                return new Cat();
            case "dog":
                return new Dog();
            default:
                break;
        }
    }
}

class Factory {
    constructor(choice) {
        choice = choice.toLocaleLowerCase()
        switch (choice) {
            case 'person':
                return new Person()
            case "animal":
                return new Animal();
            default:
                break;
        }
    }
}

const person = new Factory('person')
const male = person.getPerson('male')
male.run()

const animal = new Factory('animal')
const dog = animal.getAnimal('dog')
dog.run()