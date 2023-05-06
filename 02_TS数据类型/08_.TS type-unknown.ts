let foo:unknown = "aa"
foo = 123

// unknown类型默认情况下在上面进行任何的操作就是非法的，会报错
// 要求必须进行类型的校验(缩小)，才能根据缩小之后的类型进行对应的校验
if(typeof foo === "string"){
  console.log(foo.length)
}

export{}