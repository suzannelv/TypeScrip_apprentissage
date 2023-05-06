// tuple元组类型
// 元组数据结构中可以存放不同的数据类型，取出来的item也是有明确的类型
const info:[string, number, number] = ["why", 18, 1.88]
const value = info[2]

// 在函数中使用元组类型最多，特别是函数返回值
function useState(initialState:number):[number, (newValue:number)=>void]{
  let stateValue = initialState
  function setValue(newValue:number){
    stateValue = newValue
  }
  return [stateValue, setValue]

}

const [count, setCount] = useState(10)
setCount(100)
export{}