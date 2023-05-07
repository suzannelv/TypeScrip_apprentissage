// 定义枚举类型
enum Direction {

  LEFT,
  RIGHT

}

const d1:Direction = Direction.UP
function turnDirection (direction : Direction) {
  switch(direction){
    case Direction.LEFT:
      console.log("move à gauche")
      break
    case Direction.RIGHT:
        console.log("move à droite")
        break
  }
}

// 监听键盘的点击

turnDirection(Direction.LEFT)
export{}