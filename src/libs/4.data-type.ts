// 接口类型 interface
// 声明对象的结构形式: 定义接口字段(name: type)
interface UserInfo {
  readonly name: string
  age?: number
  isMan: boolean
  eat: (food: string) => void
  say?: Say
  phone?: Phone
}
interface Say {
  (word: string): string
}
// 可索引类型, 用于扩展
interface Phone {
  [name: string]: string
}
interface Phone1 {
  [index: number]: string
}

let p:Phone = {
  sanxing: '213213',
  sanxing1: '213213',
  sanxing2: '213213',
}

// let p1:Phone1 = ['q', 'qq']
console.log(p)

let u1: UserInfo = {
  name: 'bob',
  // eat: (food: string) => { return `吃${food}` },
  eat: (food: string): void => console.log(food),
  isMan: true
}
console.log(u1)
u1.eat('xxxx')

let u2:UserInfo = {
  name: 'xiaozhang',
  age: 18,
  isMan: false,
  eat: Function,
  phone: {
    NetEase: 'xiaozhang@163.com',
    qq: '1845751425@qq.com',
  }
}

let u3:UserInfo = {
  name: 'xiaoming',
  age: 16,
  eat: Function,
  isMan: true,
  phone: {
    NetEase: 'xiaoming@163.com',
    qq: '784536325@qq.com',
    sina: 'abc784536325@sina.com',
  }
}

console.log(u2, u3)

// 接口继承
interface VipUser extends UserInfo {
  broadcast: () => void
}

interface List {
  [n:number] : string
}