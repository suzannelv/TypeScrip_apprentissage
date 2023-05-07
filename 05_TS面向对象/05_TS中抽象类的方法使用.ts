//  getArea 方法只有声明，没有实现体，实现体让子类自己实现
// 可以将 getArea 方法定义为抽象方法，前面加abstract
// 抽象方法必须出现在抽象类中，所以类前面也需要加abstract

abstract class Shape {
 abstract getArea()
}

class Rectangle extends Shape {
  constructor(public width :number, public height:number){
    super()
  }

  getArea() {
    return this.width * this.height
  }
}

class  Circle extends Shape{
  constructor( public radius: number) {
    super()
  }
  getArea(){
    return this.radius ** 2 * Math.PI
  }
}

class Triangle extends Shape {
 getArea() {
   return 100
 }
}

// 通用的函数
function calcArea(shape: Shape) {
  return shape.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(10))
calcArea(new Triangle())

// 抽象类不能实例化
// calcArea(new Shape())

