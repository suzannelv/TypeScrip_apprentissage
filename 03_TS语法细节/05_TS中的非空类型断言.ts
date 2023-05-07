interface IPerson {
  name:string,
  age:number,
  friend?:{
    name:string
  }
}
const info:IPerson = {
  name:"why",
  age:15
}

// 访问属性：可选链: ?.
console.log(info.friend?.name)

// 属性赋值不可用可选链
// info.friend?.name = "kobe"

// solution1:
if (info.friend) {
  info.friend.name="kobe"
}

// solution2: 非空类型断言，但这种方式有点危险，只有可以确定friend一定有值得情况下才能使用
info.friend!.name ="james"
export{}