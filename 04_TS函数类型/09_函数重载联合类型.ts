// 函数重载写法
// function getLength(arg:string):string
// function getLength(arg:any[]):number


// function getLength(arg){
//   return arg.lenght
// }

// getLength("aaaaaaa")
// getLength(["aa", "bb", "cc"])


// 可以使用联合类型实现的情况下，尽量选择联合类型实现

function getLength(arg:string | any[]){
  return arg.length
}
getLength("aaaaaaa")
getLength(["aa", "bb", "cc"])

export{}