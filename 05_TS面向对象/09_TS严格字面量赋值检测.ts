interface IPerson{
  name:string
  age:number
  
}
// 奇怪现象一
const info = {
  name:"why",
  age:12,

  height:1.88
}

const obj:IPerson = info

// 奇怪现象二：
function printPerson(person:IPerson){

}
const kobe = {name:"kobe", age:30, height:2}
printPerson(kobe)


// 解释现象：第一次创建的对象字面量称之为fresh，对于新鲜的字面量，会进行严格的检测，必须全完满足类型的要求，不会有多余的属性
const info2:IPerson = {
  name:"james",
  age:12,
// height多余的属性
  // height:2.2
}

export{}
