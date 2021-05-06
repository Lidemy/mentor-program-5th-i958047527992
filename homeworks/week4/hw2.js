const request = require('request')
const process = require('process')
/* eslint "yoda": [0, "never", { "exceptRange": true }] */
// 當輸入的參數是 list，印出前 20 本書的 id 和書名
if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books', (error, response, body) => {
    const json = JSON.parse(body)
    // 設 longer 以防書的資料少於 20 筆
    const longer = 20 > json.length ? json.length : 20
    // 一筆筆輸出 id 與書名
    for (let i = 0; i < longer; i++) {
      console.log(`${json[i].id} ${json[i].name}`)
    }
  })
// 當輸入的參數是 read，印出該 id 的書名，如果沒有回傳，就回「這本書不存在資料庫中」
} else if (process.argv[2] === 'read') {
  const id = process.argv[3]
  request(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error, response, body) => {
    const json = JSON.parse(body)
    if (response.statusCode === 200) {
      console.log(json.name)
    } else {
      console.log('這本書不存在資料庫中')
    }
  })
// 當輸入的參數是 create，創造新的書籍，如果回傳代碼 201，表示創建書目成功
} else if (process.argv[2] === 'create') {
  const bookName = process.argv[3]
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: { name: bookName }
  }, (error, response, body) => {
    if (response.statusCode === 201) {
      console.log('創建書目成功')
    }
  })
// 當輸入的參數是 delete，刪除書籍
} else if (process.argv[2] === 'delete') {
  const id = process.argv[3]
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${id}`, (error, response, body) => {
    if (response.statusCode === 200) {
      console.log('刪除成功')
    } else {
      console.log('這本書的 id 不存在資料庫中')
    }
  })
// 當輸入的參數是 update，更新書籍名稱
} else if (process.argv[2] === 'update') {
  const id = process.argv[3]
  const bookName = process.argv[4]
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
    form: { name: bookName }
  }, (error, response, body) => {
    if (response.statusCode === 200) {
      console.log('修改成功')
    } else {
      console.log('這 id 不存在資料庫中')
    }
  })
  // 當輸入的參數是其他，請使用者輸入有效的參數
} else {
  console.log('請輸入有效的參數')
}
