## vue + ts 日常踩坑

- vue组件内的 script 不支持别名导入; 只能相对路径导入, 暂时没发现解决方法

- 类型断言: 用于绕过ts编译器的类型检查; 即我们需要手动指定一个值的类型
  1. <类型>值 =>  <string> value
  2. 值 as 类型 => value as string
