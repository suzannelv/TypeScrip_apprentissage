// 1. 函数类型表达式 function typeexpression
// 格式: (参数列表) => 返回值
type BarType = (num1: number)=> number
const bar:BarType = (arg:number):number =>{
  return 123
}