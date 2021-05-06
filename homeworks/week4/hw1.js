const request = require('request')
/* eslint "yoda": [2, "always", { "exceptRange": true }] */
request('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
  const json = JSON.parse(body)
  // 設 longer 以防書的資料少於 10 筆
  const longer = (10 > json.length) ? json.length : 10
  // 一筆筆輸出 id 與書名
  for (let i = 0; i < longer; i++) {
    console.log(`${json[i].id} ${json[i].name}`)
  }
})
