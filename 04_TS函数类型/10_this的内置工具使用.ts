function foo(this: {name:string}, info:{name:string}) {
  console.log(this, info)
}

type FooType = typeof foo

// 1 获取FooType类型中的 this类型
type FooThisType = ThisParameterType<FooType>

// 2. OmitThisParameter：删除this参数类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>


// 3. ThisType: 用于绑定一个上下文的this
interface IState{
  name:string, 
  age:number
}

interface IStore{
  state: IState
  eating: ()=>void
  running:()=>void


}

const store : IStore & ThisType<IState> = {
  state: {
    name:"why", 
    age:12
  },
  eating : function () {
    console.log(this.name)
  },
  running: function (){
    console.log(this.name)
  }
}

store.eating.call(store.state)

export{}
