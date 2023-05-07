interface InfoType {
  // 索引签名：可以通过字符串索引，去获取到一个值，也是字符串
  [key:string]:string

}

function getInfo():InfoType {
  const abc:any = "haha"
  return abc
}

const info = getInfo()
const name = info["name"]
console.log(name, info.age, info.adress)


// ex
interface ICollection {
  // 索引签名 要求可以通过索引进行访问
  [index: number]: string
  length: number
}

function interatorCollection (collection : ICollection){
 for(let i = 0; i<collection.length; i++){
   const item = collection[i]
   console.log(item.length)
 }
}

const array = ["abc", "cba", "nba" ]
const tuple:[string, string] = ["why", "paris"]




export {}