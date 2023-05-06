// 定义对象类型
type LyricType = {
  time: number
  text: string
}


function parsedLyric(lyric:string){
  const lyrics: LyricType[]= []
  lyrics.push({time:11, text:"okok"})
  
  return lyrics
}
const lyricInfo= parsedLyric("kkklsls")
for(const item of lyricInfo){
  console.log(item.time, item.text)
}

export{}