class Person {
 
  constructor(public name:string, private _age:number, readonly height: number){
    this.name = name
    this._age = _age
    this.height = height 
  }

 eating() {
    console.log('eat sth')
  }
}

// 实例对象instance

const p = new Person("why", 12, 1.88)

console.log(p.name, p.age)
p.name="kobe"
p.age=20
p.eating()



 export{}