// 本地服务器托管静态资源

const express = require('express')
const app = express()
app.use(express.static('dist'))
app.listen(8080, (err)=>{
  if(err) {
    console.log(err)
  }
  console.log('Project is running at http://localhost:8080')
})