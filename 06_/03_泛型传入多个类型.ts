// function foo<Type, Element>(arg1:Type, arg2: Element){}

// 也可简写成一下方式

function foo<T, E>(arg1:T, arg2: E){}


foo(2, 20)
foo(10, "zz")
foo<string, {name:string}>("aa", {name:"why"})

export{}
