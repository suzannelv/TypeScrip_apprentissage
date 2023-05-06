// 明确的指定数组类型注解：两种写法
// 1. string[]:数组类型，并且数组中存放的是字符串类型
// 2. Array<string>:数组类型，并且数组中存放的是字符串类型

let names: string[] = ["abc", "cba", "nba"]
names.push('aaa')

let nums:Array<number> = [123, 321]

export{}