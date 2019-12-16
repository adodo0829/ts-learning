import { type } from "os";

// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，
// 而在使用的时候再指定类型的一种特性
// 在声明的同时指定类型变量的类型值

// 1.函数约束
// 类型T不需要预先指定 相当于any类型
// 保证输入类型和返回值类型是一致的 弥补了any类型的缺点
function log<T>(v: T): T {
  return v;
}
let s: string = "generics";
let a = log(s);
console.log(a);
console.log(log(1111));

// 2.函数类型约束
// 联合类型,类型别名与字符串字面量类型都是使用 type 进行定义。
// type Log = <T>(v: T) => T // 类型别名
interface Log {
  <T>(v: T): T;
}
let myLog: Log = log;
console.log(myLog([1, 2, 3]));

// 3.泛型接口
// 接口的所有属性都可以受到泛型变量的约束
// 可以传入默认类型
interface IGeneric<T = string> {
  (v: T): T;
}
let IG1: IGeneric<number> = log;
console.log(IG1(123));

// 4.泛型类
class GenericNumber<T> {
  // 泛型变量不能约束类的静态属性
  // zeroValue: T = T;
  add(x: T, y?: T) {
    console.log(x);
    return x;
  }
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.add(1);
let myG1 = new GenericNumber();
myG1.add("hello ts generics");

// 5.泛型约束
interface Length {
  length: number;
}

// T继承Length接口, 这样的话输入的参数必须具有length属性 获取value.length就是合法的了
function ggg<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
ggg('hello')
ggg([1, 2, 3])