// 1. typeof

function printID(id: string|number){
  if(typeof id === "string") {
    console.log(id.length, id.split(""))
  }else{
    console.log(id)
  }
}

// 2. ===, !== 案例：方向类型的判断
type Direction = "left"|"right"| "up"|"down"
function switchDirection (direction: Direction) {
  if (direction === "left") {
    console.log("left")
  }else if (direction === "right"){
    console.log("you")
  }else if (direction === "up"){
    console.log("up")
  }
}

// 3. instanceof, ex: log date

function printDate(date: string|Date){
  if (date instanceof Date) {
    console.log(date.getTime())
  }else{
    console.log(date)
  }
}

// 4. in 判断是否有某一个属性
interface ISwim {
  swim:()=>void
}
interface IRun{
  run:()=>void
}
function move(animal:ISwim| IRun){
  if ("swim" in animal) {
    animal.swim()
  }else if("run" in animal){
    animal.run()
  }
}

const fish:ISwim={
  swim:function(){}
}

const dog:IRun = {
  run:function (){}
}



export{}

