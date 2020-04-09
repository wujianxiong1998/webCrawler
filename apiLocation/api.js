// 托管接口到本地

const express = require('express')
const app = express()
const port = 3000
let data = {
  information: [
    { 
      name: '张三',
      age: 18,
      address: {
        home: '金银潭',
        phone: 1370000000
      }
    },
    { 
      name: '张三',
      age: 18,
      hobit: [
        { one: '打麻将', two: '打乒乓球' },
        { one: '打扑克', two: '打篮球' },
        { one: '打游戏', two: '踢足球' },
      ]
    }
  ],
  color: 'red'
}

app.get('/', (req, res) => {
  return res.send('hello world!')
})
app.get('/name', (req, res) => {
  return res.send(data)
})
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/name`)
})