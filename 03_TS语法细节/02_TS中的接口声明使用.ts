// 接口：interface
interface pointType{
  x:number, 
  y:number, 
  z?:number
}

function printPoint(point:pointType){

}

// interface和type区别：类型别名和接口非常相似，在定义对象类型时，大部分时候，可以任何选择使用
// 1. type使用范围更加广泛，接口类型只能声明对象
   type MyNumber = number
   type IDType = number | string
// 2  在声明对象时，interface可以多次声明
    //2.1 type不允许两个相同名称的别名同时存在
    type PointType1 = {
      x:number,
      y:number
    }
    type PointType2 = {
     z?:number
    }
    // 2.2 interface可以多次声明同一个接口名称
    interface PointType {
      x:number, 
      y:number
    }
    interface PointType {
      z:number
    }

    const point: PointType = {
      x:100, 
      y:100,
      z:200
    }

    // interface 支持继承
    interface IPerson{
      name: string, 
      age:number
    }
    interface IPerson1 extends IPerson{
      // name:string, 
      // age:number,
      slogan:string
    }
    const Ikun1: IPerson1= {
      name: "kobe",
      age:20,
      slogan:"why"
    }

    // interface 可以被类实现
    // class Person implements IPerson{

    // }


    // résumé: si pas objet, utilisé type, sinon, interface

    export{}

