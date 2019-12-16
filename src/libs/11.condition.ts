// 条件类型(泛型的使用)
// 类型不唯一; 实现类型过滤
// T extends U ? X : Y
type TName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  'boolean'
type T1 = TName<string>
type T2 = TName<boolean>

type Diff<T,U> = T extends U ? never : T
type T3 = Diff<'a' | 1 | 'c', 'a' | 'd'> //依次 Diff => 1 | 'c