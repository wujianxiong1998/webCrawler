// copy标签及内容
// cheerio是JQuery里的一种方法

const cheerio = require('cheerio')
const https = require('https')
const fs = require('fs')

https.get('https://www.baidu.com/', res=>{
  let html = ''
  res.on('data', data=>{
    html += data
  })
  res.on('end', ()=>{
    const $ = cheerio.load(html)
    let links = $('a')
    for(let i=0; i<links.length; i++){
      console.log($(links[i]).text(), links[i].attribs.href)
    }
  })
})
