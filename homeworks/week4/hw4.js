const request = require('request')

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': '75ez6pscjzlxcv2ys0du2nvcxrfdai',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (error, response, body) => {
  const json = JSON.parse(body)
  const total = json._total
  for (let i = 0; i < total; i++) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`)
  }
})
