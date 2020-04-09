// copy整个网页

const https = require('https')
const fs = require('fs')

https.get('https://www.baidu.com/', res=>{
  let html = ''
  res.on('data', data=>{
    html += data
  })
  res.on('end', ()=>{
    fs.writeFile('index.html', html, (err)=>{
      if (err) {
        console.log(err)
      }
      console.log('克隆成功！')
    })
  })
})
