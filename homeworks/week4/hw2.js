const request = require('request')
const process = require('process')

const baseUrl = 'https://lidemy-book-store.herokuapp.com'
const args = process.argv
const behavior = args[2]
const params = args[3]
/* eslint "yoda": [0, "never", { "exceptRange": true }] */

switch (behavior) {
  case 'list': // 當輸入的參數是 list，印出前 20 本書的 id 和書名
    listBooks()
    break
  case 'read': // 當輸入的參數是 read，印出該 id 的書名，如果沒有回傳，就回「這本書不存在資料庫中」
    readTargetBook(params)
    break
  case 'delete': // 當輸入的參數是 delete，刪除書籍
    deleteTargetBook(params)
    break
  case 'create': // 當輸入的參數是 create，創造新的書籍，如果回傳代碼 201，表示創建書目成功
    createNewBook(params)
    break
  case 'update': // 當輸入的參數是 update，更新書籍名稱
    updateTargetBook(params, args[4])
    break
  default:
    console.log('Available commands: list, read, delete, create and update')
}

function listBooks() {
  request(`${baseUrl}/books?_limit=20`, (error, response, body) => {
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
}

function readTargetBook(target) {
  request(`${baseUrl}/books/${target}`, (error, response, body) => {
    // 處理傳送 request 錯誤
    if (error) {
      console.log('Error message: ', error)
      return
    }
    // 處理 response 狀態碼
    if (!(response.statusCode >= 200 && response.statusCode < 300)) {
      console.log('這本書不存在資料庫中')
      return
    }
    // 處理接的資料不是 json 格式
    let book
    try {
      book = JSON.parse(body)
    } catch (error) {
      console.log(error)
      return
    }
    console.log(book)
  })
}

function deleteTargetBook(target) {
  request.delete(`${baseUrl}/books/${target}`, (error, response, body) => {
    // 處理傳送 request 錯誤
    if (error) {
      console.log('Error message: ', error)
      return
    }
    // 處理 response 狀態碼
    if (!(response.statusCode >= 200 && response.statusCode < 300)) {
      console.log('這本書的 id 不存在資料庫中')
      return
    }
    console.log('刪除成功')
  })
}

function createNewBook(bookName) {
  request.post({
    url: 'https://lidemy-book-store.herokuapp.com/books',
    form: { name: bookName }
  }, (error, response, body) => {
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
    console.log('創建書目成功')
  })
}

function updateTargetBook(id, newName) {
  request.patch({
    url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
    form: { name: newName }
  }, (error, response, body) => {
    // 處理傳送 request 錯誤
    if (error) {
      console.log('Error message: ', error)
      return
    }
    // 處理 response 狀態碼
    if (!(response.statusCode >= 200 && response.statusCode < 300)) {
      console.log('這 id 不存在資料庫中')
      return
    }
    console.log('修改成功')
  })
}
