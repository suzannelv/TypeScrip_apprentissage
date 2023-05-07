class Person {
  // 成员属性：声明成员属性
  name:string
  age:number
  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }
}

// 实例对象instance

const p1 = new Person("why", 12)
const p2 = new Person("kobe", 1)
 console.log(p1.name, p2.age)

 export{}