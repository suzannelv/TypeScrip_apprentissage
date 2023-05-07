interface ICollection {
  // 索引签名 要求可以通过索引进行访问
  [index: number]: number
  length:number
}

const names:string[] = ["abc", "cba", "nba" ]

console.log(names[0])

function interatorCollection (collection : ICollection){
 console.log(collection[0])
}

// interatorCollection(names)

// const tuple:[string, number] = ["why", 11]

// interatorCollection(tuple)
interatorCollection({name:111, age:12, length:10})
export{}