const request = require('request')
/* eslint "yoda": [0, "never", { "exceptRange": true }] */
request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  // 處理傳送 request 錯誤
  if (error) {
    console.log('Error message: ', error)
    return
  }
  // 處理 response 狀態碼
  if (!(response.statusCode >= 200 && response.statusCode < 300)) {
    console.log('Invalid request')
    return
  }
  // 處理接的資料不是 json 格式
  let books
  try {
    books = JSON.parse(body)
  } catch (error) {
    console.log(error)
    return
  }

  // 一筆筆輸出 id 與書名
  for (let i = 0; i < books.length; i++) {
    console.log(`${books[i].id} ${books[i].name}`)
  }
})
