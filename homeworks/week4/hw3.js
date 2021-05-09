const request = require('request')
const process = require('process')

const name = process.argv[2]
request(`https://restcountries.eu/rest/v2/name/${name}`, (error, response, body) => {
  // 處理傳送 request 錯誤
  if (error) {
    console.log('Error message: ', error)
    return
  }
  // 處理 response 狀態碼
  if (!(response.statusCode >= 200 && response.statusCode < 300)) {
    console.log('找不到國家資訊')
    return
  }
  // 處理接的資料不是 json 格式
  let data
  try {
    data = JSON.parse(body)
  } catch (error) {
    console.log(error)
    return
  }
  for (let i = 0; i < data.length; i++) {
    console.log('============')
    console.log(`國家：${data[i].name}`)
    console.log(`首都：${data[i].capital}`)
    console.log(`貨幣：${data[i].currencies[0].code}`)
    console.log(`國碼：${data[i].callingCodes}`)
  }
})
