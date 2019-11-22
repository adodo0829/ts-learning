// 枚举类型
// 用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。

// 1.number 枚举(对象)
enum Direct {
  u, // 对象的值 value
  d = 8,
  l,
  r
}

console.log(Direct)
console.log(Direct.l, Direct[8]) // 9, 'd'
console.log(Direct.u, Direct[0]) // 0, 'u'

// 2.string 枚举
enum Str {
  Up = 'Uuuuup',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
console.log(Str);
console.log(Str.Up)
console.log(Str['Up'])

// 3.异构枚举(混合)
enum StrNum {
  n = 0,
  y = 'yes'
}
console.log(StrNum)
console.log(StrNum.n, StrNum[0]);

// 4.常量枚举
const enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

const up = Direction.Up
console.log(up)

// 5.枚举合并, 可重新声明
enum Str {
  ll = 'xxxxx'
}
console.log(Str)

// 6.枚举的静态方法 namespace
enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

namespace Month {
  // 导出方法
  export function isSpring(month: Month) :boolean {
    switch (month) {
      case Month.January:
      case Month.February:
      case Month.March:
        return true
      default:
        return false
    }
  }
}
console.log(Month.isSpring(Month.February))