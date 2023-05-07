class Person {
  // 成员属性：声明成员属性
  // public, private, protected
  // protected:仅在类自身及子类中可见，受保护的属性或方法
  public name:string
  public age:number
  constructor(name:string, age:number){
    this.name = name
    this.age = age
  }

  private eating() {
    console.log('eat sth')
  }
}

// 实例对象instance

const p = new Person("why", 12)

console.log(p.name, p.age)
p.name="kobe"
p.age=20
p.eating()


class Student extends Person{
  constructor(name: string, age:number){
    super(name, age)
  }

  studying() {
    console.log("studing", this.name)
  }
}

const stu = new Student ("why", 13)

 export{}