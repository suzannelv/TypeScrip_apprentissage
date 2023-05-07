// 1. 字面量类型的基本使用 literal types
const name : "why" = "why"
const age:18=18

// 2.将多个字面量类型联合起来
type Direction = "left" | "right" |"up"|"down"

const d1: Direction = "left"

// ex: 封装请求方法
// type Method = "get" | "post"
// function request (url:string, method: Method) {

// }

// request("http://www", "post")

// ts 细节
// const info = {
//   url:"www",
//   method:"post"
// }
// 下面的做法使错误的: info.method->"string"
// request(info.url, info.method)

// solution1: info.method 进行类型断言
// request(info.url, info.method as "post")

// solution 2: 直接让info对象类型时一个字面量类型

const info2 = {
  url:"www",
  method: "post"
 } as const 
//  request(info2.url, info2.method)





export{}