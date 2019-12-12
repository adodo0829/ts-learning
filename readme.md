# typescript 总结笔记

## 前言介绍
- typescript 的优点
  静态弱类型语言, 编译时就会报错, 降低bug,低级错误出现的可能性
  自带代码提示,类型注解,易于协作,降低沟通成本

- 为什么学习 ts
  除了上面一些优点之外, ts 可以帮助我们锻炼数据类型思维(数据定义: 数据类型,结构), 提高我们编码的严谨性以及代码的健壮性;
  本篇笔记就 ts 的理论基础和实践两个方面进行了一些总结

## 理论基础篇

### 常用类型
基础篇就快速过一下...
- string	
  let s: string = 'i am string'
- number	
  let n: number = 1
- boolean	
  let b: boolean = true
- null & undefined
  // undefined 类型的变量只能被赋值为 undefined
  // null 类型的变量只能被赋值为 null
  // 赋值为其他类型会报错
  let ud: undefined = undefined
  let nu: null = null
- void 空值
  // 没有返回值的函数为void
  // 声明一个 void 类型的只能将它赋值为 undefined 和 null
  const popup = (): void => {
    console.log('function no return')
  }
  let useless: void = undefined
- any 任意类型, 实在没招了就用这个吧
  // 可以被任何值赋值, 声明未指定类型的变量也为 any
  let anyType: any = 'str'
- unkonwn
  let uk: unknown;
  // unknown 和 any 的主要区别是 unknown 类型会更加严格:在对unknown类型的值执行大多数操作之前,我们必须进行某种形式的检查,而在对 any 类型的值执行操作之前,我们不必进行任何检查。
  // 当 unknown 类型被确定是某个类型之前,它不能被进行任何操作比如实例化、gett
- 数组array
  let arr1: (number | string)[] = [1, 2, 3, '2121']
  let arr2: Array<number | boolean> = [2, 2, 2, true]
- 元组
  // 表示一个已知元素数量和类型的数组，各元素的类型不必相同;越界不能访问
  let t1: [string, number, boolean | string]
  t1 = ['hello', 123, false]
- never
  // 永不存在的值的类型
  // never类型: 总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
  // 死循环
  // 不能赋值给除了 never 类型的其他类型, 不能接受其他类型
  const err = (msg: string): never => {
    throw new Error(msg)
  }
  // err('hahaahah')
- symbol
  let ss: symbol = Symbol('hello')
  console.log(ss)

- object 表明数据类型是 object
  let obj: {name: string, value: number} = { name: 'huhua', value: 1232 }
  let obj1: object = { name: '哈哈', value: 1232 }
  console.log(obj, obj1, obj.name)
  // console.log(obj1.name) // name 不在 object 上

- function 具体后面细讲
  let myAdd = (x: number, y: number): number => x + y
  let add = (x: number, y: number) => x + y // 类型推断, 不必注明返回值类型
  console.log(myAdd(1, 2), add(3, 100))

  let compute: (x:number, y:number) => number   // 定义函数类型
  compute = (aaa, bbb) => aaa + bbb

### 枚举类型 enum
枚举: 我们可以理解为一组常量的集合, 可以帮助我们解决一些硬编码问题
特别是 if 语句中的判断值
- 数字枚举
export enum EState {
  one = 1,
  two,
  three,
  four,
  five,
  six,
  seven
}
可以正反取值: EState['one'] === 1; EState[1] === 'one'
方便维护一个状态数组; 另外在组件中可以赋值给一个变量

- 字符串枚举
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction['Right'], Direction.Up); // Right Up

- 异构枚举(混合)
enum StrNum {
  n = 0,
  y = 'yes'
}

- 常量枚举(const 声明)
// 只需要对象的值时可以使用常量枚举, 提高性能
const enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

const up = Direction.Up
console.log(up)

### 接口 interface
接口通常用来约束我们定义的对象, 函数, 类的结构和类型
- 对象约束
// 赋值的时候，变量的形状必须和接口的形状保持一致(不能多也不能少,类型还必须一致)
interface Person {
  readonly id: number // 只读属性
  name: string
  age: number
  sex?: string // 可选属性
  [key: string]: any //  索引类型, 值为任意属性; 以上必须为 any 的子级
}
  
- 函数约束
只是约束函数的形状, 没有实质性的声明和计算
interface Func {
  (x: number, y: number): number
}
let addSum1: Func
addSum1 = (a, b) => a + b

- 类约束

### 函数类型
- 函数类型定义:
// function 声明
function add(a:number, b: number) {
  return a + b
}
// 类型结构声明, 表达式另外声明
let add: (a: number, b: number) => number
type Add: (a: number, b: number) => number
interface IAdd {
  (a: number, b: number): number
}
- 参数
// 可选参数, 默认参数, 剩余参数: 注意顺序
function add(a: number, b = 100, c?: number) {
  return c ? a + b + c : a + b
}
function add(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, acc) => pre + acc)
}
- 函数重载 
同名函数多类型兼容, 根据参数的不同来实现不同功能, 进行匹配
function add(...rest: number[]): number
function add(...rest: string[]): string
function add(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, acc) => pre + acc)
  }
}

### 类的类型 class
ts主要添加成员的类型注解和成员修饰符;
ES6中类的数据类型就是函数，类本身就指向构造函数, 其方法都定义在构造函数的 prototype 属性上.我们可以通过 ClassName.prototype.xxx 去访问
- 类声明
class Car {
  // 实例属性: 这样声明要有初始值
  _wheel: number = 4
  // 实例属性成员构造器: 默认返回实例对象（即this）
  constructor(name: string) {
    this.name = name
  }
  // 只读属性
  readonly oil: string = '汽油'
  // public 默认的: 成员是可以被外部访问
  public name: string = 'car'
  // 实例方法
  run() { console.log(this.name + 'runing...') }
  // 私有成员: 成员是只可以被类的内部访问
  private priv() { console.log('priv') }
  // 被保护成员: 成员是只可以被类的内部以及类的子类访问
  protected pro() {}
  // 静态成员: 可以被类名调用和其子类名调用
  static seats: string = '座位'
}
let bz = new Car('benz') // 通过 new 来实例化
console.log(Car.seats)

- 类继承
class Bmw extends Car {
  constructor(name: stirng, public color: string) {
    // 先调用父类的实例
    super(name)
    this.color = color
  }
}
console.log(Bmw.seats)


## 实践篇


## 一些注意事项(踩坑)
1. vue组件内的 script 不支持别名导入; 只能相对路径导入, 暂时没发现解决方法

2. 类型断言: 用于绕过ts编译器的类型检查; 即手动指定一个值的类型
	
    <类型>值 =>  <string> value
	值 as 类型 => value as string
    (this.$refs['multiTable'] as any).clearSelection()
    (this.$refs['downParams'] as Form).resetFields()
    
3. $refs 双重断言
	((this.$refs.saveTagInput as Vue)['$refs'].input as HTMLInputElement).focus()


