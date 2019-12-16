// 映射类型
interface MObj {
  a: string
  b: number
  c: boolean
}
// 映射为 readonly
type ReadObj = Readonly<MObj>
// 映射为可选
type PartObj = Partial<MObj>
// pick
type PickObj = Pick<MObj, 'a'>
// 映射生成新的属性
type RecordObj = Record<'x' | 'y', MObj>