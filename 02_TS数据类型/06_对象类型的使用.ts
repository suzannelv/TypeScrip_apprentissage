type PointType = {
  x:number
  y:number
  //加 ?表示可选项
  z?:number
}

function printCoordinate(point: PointType){
  console.log("x:", point.x)
  console.log("y:", point.y)

}
printCoordinate({x:20, y:20})
export{}