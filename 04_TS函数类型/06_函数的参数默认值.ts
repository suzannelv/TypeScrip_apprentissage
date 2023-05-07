// 函数的参数可以有默认值
// 1. 有默认值得情况下，参数的类型可以省略
// 2 有默认值得参数，是可以接收一个undefined值

function foo(x:number, y=100){

}

foo(12)
foo(12, undefined)

foo(10, 22)
export{}