// 定义函数：将传入的内容返回 <Type>(arg:Type)
function bar<Type>(arg:Type):Type{
  return arg
}

// 完成写法
const res1 = bar<number>(123)
const res2 = bar<string>("aaa")
const res3 = bar<{name:string}>({name:"why"})

// 省略写法
const res4 = bar("bbb")
let res5 = bar(12)

export{}