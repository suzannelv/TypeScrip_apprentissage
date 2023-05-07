interface IKun{
  name:string
  age:number
  slogan:string
  play:()=> void
  
}

const ikun: IKun = {
  name:"why",
  age:19,
  slogan: "what",
  play: function(){}

}

// 作用：接口被类实现
class Person implements IKun {
  name :string
  age: number
  slogan: string
  play(){

  }
  run(){}

}

const ikun1 = new Person()
const ikun2 = new Person()
const ikun3 = new Person()

console.log(ikun1.name, ikun2.age, ikun3.slogan)
ikun2.play()
ikun3.run()
export{}
