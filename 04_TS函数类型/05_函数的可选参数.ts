// y是一个可选参数
// 可选参数的类型是number | undefined联合类型
function foo(x:number, y?:number){

  if (y!==undefined){
    console.log(y+10)
  }

}

foo(10)
foo(1, 2)

export{}

