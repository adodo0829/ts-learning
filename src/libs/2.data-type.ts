/**
 * ts高级类型
 */

// 1.联合类型
// 当某个变量被赋值多种类型的时候,使用联合类型,管道符进行连接
let unionType: number | string | boolean
unionType = 111
console.log(unionType)
unionType = false
console.log(unionType)

// 2. 接口 interface; 对象高级类型
// 赋值的时候，变量的形状必须和接口的形状保持一致(不能多也不能少,类型还必须一致)
interface Person {
  name: string,
  age: number,
  sex?: string, // 可选属性
  readonly address?: string, // 只读属性
  [prop: string]: any // 任意属性; 以上必须为 any 的子级
}
let huhua: Person = {
  name: 'huhua',
  age: 24
}
let p1: Person = {
  name: 'p1',
  age: 12,
  sex: 'male'
}
huhua.age = 100
console.log(huhua, huhua.name, huhua.age)
console.log(p1)

// 索引类型接口
interface StringArray {
  [index: number]: string,
}
let arrString: StringArray = ['111', '222']
console.log(arrString)

// 任意类型
let p2: Person = {
  name: 'xxxx',
  age: 122,
  func: () => { },
  address: 'xxxxx' // 只读
}
console.log(p2)

// 函数类型接口
let addSum: (x: number, y: number) => number = (a: number, b: number): number => a + b

interface Func {
  (x: number, y: number): number
}

let addSum1: Func
addSum1 = (a, b) => a + b

// 3.函数类型: 关于参数
// 定义表达式类型: 
// 定义表达式=
// 可选参数
let addString: (str1: string, str2?: string) => string
addString = (s1, s2) => {
  // 不传s2 为 undefined
  if (s2) {
    return s1 + s2
  } else {
    return s1
  }
}
console.log(addString('hello'))

// 剩余参数...rest
let addStringRest = (str1: string, ...strList: string[] ): string => str1 + strList.join(',')
console.log(addStringRest('h', '21', 'l', 'p'))

// 总结: 函数声明的几种方式
// 1.function add() 2.变量类型 add: (x:number) => number
// 3.类型别名 add = () => number  4.接口 interface add { (x:number): number}