// 创建HTTP服务器
let http = require('http')
let fs = require('fs')
http.createServer((req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./public/views/index.html', (err, data) => {
      if (err) {
        return res.end('404 NOT FOUND')
      }
      res.end(data)
    })
  } else {
    fs.readFile('.'+url, (err, data) => {
      if (err) {
        return res.end('404 NOT FOUND')
      }
      res.setHeader('Content-Type', 'text/css; charset=utf-8')
      res.end(data)
    })
  }
}).listen(3000, () => {
  console.log('running')
})