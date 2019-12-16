// 类

// 1.抽象类 abstract: 作为基类使用;
abstract class Animal {
  // abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法
  abstract say(): void;
  move(): void {
    console.log('i can move')
  }
}

class Dog extends Animal {
  // 声明抽象类中的方法, 这里子类可以对父类方法进行重写; 实现所谓的多态
  say() {
    console.log('汪汪汪');
  }
}

let dog1 = new Dog()
dog1.say() // 汪汪汪
dog1.move() // i can move

//  类访问限制标志: public, private, protected
class Car {
  // 公共方法: 可以被外部访问
  public run() {
    console.log('i can run');
    this.sit()
  }
  // 只能在类的内部访问
  private sit() {
    console.log('sit me')
  }
  // 只可以被 类的内部 && 类的子类内部访问
  protected addOil() {
    console.log('add oil');
  }
}

let car1 = new Car()
car1.run()
// car1.addOil() 不能访问

class BWM extends Car {
  init() {
    this.addOil()
  }
}

let X5 = new BWM()
X5.init()

// class 接口
// 组件 props 所需的类型和初始值
export default class Props {
  // public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
  public speed: number = 500
  public height: number = 160
  public animation: string = 'easeInOutQuad'
  public isAuto: boolean = true
  public autoPlayInterval: number = 4500
  // public afterChange: () => {}
  // public beforeChange: () => {}
  // public selesctedColor: string
  public showDots: boolean = true
  // 设置defaultProps初始值
  public static defaultProps = new Props()
}

console.log(Props.defaultProps);

// 函数重载

// 数重载的意义在于能够让你知道传入不同的参数得到不同的结果，如果传入的参数不同，但是得到的结果（类型）却相同，那么这里就不要使用函数重载（没有意义）。
interface User {
  name: string;
  age: number;
}

const user = {
  name: 'Jack',
  age: 123
};

class SomeClass {
  /**
   * 参数 1: 一个参数
   */
  public test(para: User): number;
  /**
   * 参数 2: 两个参数
   */
  public test(para: number, flag: boolean): number;

  // 参数 3: 兼容
  public test(para: User | number, flag?: boolean): number {
    return 11;
  }
}
const someClass = new SomeClass();


// ok
someClass.test(user);
someClass.test(123, false);

// Error
// someClass.test(123);
// someClass.test(user, true);