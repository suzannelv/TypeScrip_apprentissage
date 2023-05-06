// 在定义一个TS中函数时，要明确的指定参数类型
// 返回值类型可以明确指定，也可以自动进行类型推导:function sum(num1:number, num2:number):number
function sum(num1:number, num2:number):number {
  return num1+num2
}
sum(1,2)



export{}