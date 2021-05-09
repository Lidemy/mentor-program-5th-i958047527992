const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': '75ez6pscjzlxcv2ys0du2nvcxrfdai',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (error, response, body) => {
  // 處理傳送 request 錯誤
  if (error) {
    console.log('Error message: ', error)
    return
  }
  // 處理 response 狀態碼
  if (!(response.statusCode >= 200 && response.statusCode < 300)) {
    console.log('invalid request')
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
  const total = data.top.length
  for (let i = 0; i < total; i++) {
    if (!(data.top[i] === undefined)) {
      console.log(`${data.top[i].viewers} ${data.top[i].game.name}`)
    }
  }
})
