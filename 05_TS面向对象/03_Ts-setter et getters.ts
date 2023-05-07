class Person{
  // 私有属性：属性签名会使用_
 private _name:string
 private _age : number

 constructor(name:string){
  this._name=name
 }

 running () {
  console.log("run", this._name)
 }

//  setter.getter： 对属性的访问进行拦截操作
set name(newValue:string) {
  this._name=newValue
}

get name(){
  return this._name
}

set age(newValue:number){
  if(newValue>=0 && newValue<200){
     this._age=newValue
  }
 
}

get age(){
  return this._age
}

}

const p = new Person ("why")
p.name="kobe"

p.age=-10
console.log(p.age)

export{}