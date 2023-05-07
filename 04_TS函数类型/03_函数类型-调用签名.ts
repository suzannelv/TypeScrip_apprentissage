type BarType = (num1:number)=>number

// 函数的调用签名，call signature, 从对象的角度来看这个函数，也可以有其他的属性
interface IBar {
  name:string, 
  age:number,
  // 函数可以调用：函数调用签名
  (num1:number):number
}

const bar:IBar = (num1:number) : number =>{
  return 123
}
bar.name = "aaa"
bar.age = 12
bar(123)

export{}