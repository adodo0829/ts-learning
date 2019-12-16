// 联合,交叉,索引类型

// 1.交叉类型: &
// 多个接口合并
interface IInsert1 {
  i1: string
  insetrt1(): void
}
interface IInsert2 {
  i2: number
  insetrt2(): void
}

let i: IInsert1 & IInsert2  = {
  i1: '',
  i2: 1,
  insetrt1() {},
  insetrt2() {}
}
console.log(i);

// 2.联合类型 | 类型的所有可能性
// 字面量联合, 并集
let sn: string | number = 1 // '1'
type S =  'a' | 'b' | 'c'
let s: S = 'a'
console.log(s);

// 3.索引类型
// 缩小类型的约束范围
// 索引类型查询操作符 keyof T; 联合类型的集合
// 类型指定 T[K]; 
// 泛型约束 T extends U
interface IObj {
  a: string
  b: number
}
let key: keyof IObj
let k: IObj['a']

let iobj = {
  a: 1,
  b: 2,
  c: 'ccc'
}
// 泛型索引约束
function getObjValue<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getObjValue(iobj, ['a', 'c']));
// console.log(getObjValue(iobj, ['a', 'd'])); 保错