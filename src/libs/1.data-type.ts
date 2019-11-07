/**
 * ts数据类型: 基本类型
 * 变量声明: 添加类型注解
 */

// 1.布尔值
let isBool: boolean = true
let isBool1: boolean = Boolean(0)
// let isBool2: boolean = new Boolean(1) // 报错
console.log(isBool, isBool1)

// 2.数值: 支持进制: 二:0b1010, 八:0o744, 十六:0xf00d
let isNum: number = 1314
let isNan: number = NaN
let is0b: number = 0b10
let isInfinite: number = Infinity
console.log(isNum, isNan, isInfinite, is0b)

// 3.字符串
let str: string = 'hello world'
let str1: string = `hello world222`
console.log(str, str1)

// 4.null & undefined
// undefined 类型的变量只能被赋值为 undefined
// null 类型的变量只能被赋值为 null
// 赋值为其他类型会报错
let ud: undefined = undefined
let nu: null = null
console.log(ud, nu)

// 5.空值 void
// 没有返回值的函数为void
// 声明一个 void 类型的只能将它赋值为 undefined 和 null
const popup = ():void => {
  console.log('函数没有 return')
}
popup()
let useless: void = undefined
console.log(useless)

// 6.任意类型 any
// 可以被任何值赋值, 声明未指定类型的变量也为 any
let anyType: any = 'str'
anyType = 1111
let anyType1
anyType1 = true
console.log(anyType, anyType1)

// 7.数组
let arr1: (number | string)[] = [1, 2, 3, '2121']
let arr2: Array<number | boolean> = [2, 2, 2, true]
console.log(arr1, arr2)

// 8.元组 tuple
// 表示一个已知元素数量和类型的数组，各元素的类型不必相同;越界不能访问
let t1: [string, number, boolean | string]
t1 = ['hello', 123, false]
console.log(t1, t1[1])
t1[2] = 'xxoo'
console.log(t1)

// 9.never
// 永不存在的值的类型
// never类型: 总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// 死循环
// 不能赋值给除了 never 类型的其他类型, 不能接受其他类型
const err = (msg: string): never => {
  throw new Error(msg)
}
// err('hahaahah')

// 10.object 表明数据类型是 object
let obj: {name: string, value: number} = { name: 'huhua', value: 1232 }
let obj1: object = { name: '哈哈', value: 1232 }
console.log(obj, obj1, obj.name)
// console.log(obj1.name) // name 不在 object 上

// 11.symbol
let ss: symbol = Symbol('hello')
console.log(ss)

// 12.function
let myAdd = (x: number, y: number): number => x + y
let add = (x: number, y: number) => x + y // 类型推断, 不必注明返回值类型
console.log(myAdd(1, 2), add(3, 100))

let compute: (x:number, y:number) => number   // 定义函数类型
compute = (aaa, bbb) => aaa + bbb