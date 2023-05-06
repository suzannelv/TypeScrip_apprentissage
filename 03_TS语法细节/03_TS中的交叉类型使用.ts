// 交叉类型：两种或多种类型要同时满足
type NewType = number & string

interface Ikun {
  name:string,
  age:number
}

interface ICoder{
  name: string, 
  coding: ()=> void
}

const info: Ikun & ICoder = {
  name : "why",
  age:18,
  coding: function (){
    console.log("coding")
  }
}