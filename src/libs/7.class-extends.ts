// 类扩展用法
// 1.抽象类abstract(基类: 不可实例化)
// 抽象类的优点：可以抽离出一些事物的共性，有利于代码的复用和扩展 也可以实现多态
// 多态： 在父类中定义一个抽象方法，在多个子类中有不同的实现
// 在程序运行时会根据不同的对象实现不同的操作 这样就实现了运行时的绑定

// 2.类实现链式调用, 方法return this
class WorkFlow {
  step1() {
    console.log(11111);
    return this;
  }
  step2() {
    console.log(22222);
    return this;
  }
}
new WorkFlow().step1().step2();

// 3.类实现接口
// 不同类之间公有的属性或方法，可以抽象成一个接口, 来被类实现（implements)
// 类必须实现接口中声明的所有属性;可以定义接口未声明的属性
// 接口只能约束类的公有成员 public
// 接口不能约束类的构造函数
interface Man {
    name: string
    age: number
}

class Huhua implements Man {
    // 类中声明共有属性
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eat() {
        console.log('eat food')
    }
}
