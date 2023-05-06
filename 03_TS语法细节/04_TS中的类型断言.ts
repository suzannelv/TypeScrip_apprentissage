// objectif:获取DOM元素<img class= "img">
// const imgEl = document.querySelector(".img")

// if (imgEl !== null) {//类型缩小
//   imgEl.src = "xxx"
//   imgEl.alt = "yyy"
// }


// 使用类型断言
const imgEl = document.querySelector(".img") as HTMLImageElement
imgEl.src = "xxx"
imgEl.alt = "yyy"

export {}