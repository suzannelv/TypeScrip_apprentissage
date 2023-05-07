class Point <Type=number>{
  x:Type
  y:Type
  constructor(x:Type, y:Type){
    this.x=x
    this.y=y
  }
}


const p1 = new Point(12, 23)
console.log(p1.x)
const p2 = new Point ("11", "22")
console.log(p2.x)
export{}
