// 1. TS中如果一个函数没有任何的返回值，那么返回值的类型就是void类型
// 2. 如果返回值是void类型，那么我们也可以返回undefined
function sum(num1:number, num2:number):void{
  console.log(num1+num2)
  // return undefined
}

// 应用场景: 用来指定函数类型的返回值是void
type LyricInfoType = {time: number, text:string}
function parseLyric(lyric:string): LyricInfoType[]{
  const lyricInfos : LyricInfoType[]=[]
  return lyricInfos
}
// parseLyric => 函数/对象
type FooType = ()=>void
const foo:FooType=()=>{}

// autre exemple
// 1.定义要求传入的函数类型
type ExecFnType = (...args:any[])=>void
// 2. 定义一个函数，并且接收的参数也是一个函数，而且这个函数的类型必须是ExecFnType
function delayExecFn(fn: ExecFnType){
  setTimeout(()=>{
    fn("why", 18)
  },1000)
}
// 3.执行上面的函数，并且传入一个匿名函数
delayExecFn((name, age)=>{
  console.log(name, age)
})

export{}