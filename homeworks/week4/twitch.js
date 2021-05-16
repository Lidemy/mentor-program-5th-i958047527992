const request = require('request')

const process = require('process')

const game = process.argv[2]
let count = 0
let options = {
  url: `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=100&offset=0`,
  headers: {
    'Client-ID': '75ez6pscjzlxcv2ys0du2nvcxrfdai',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (error, response, body) => {
  const json = JSON.parse(body)
  const away = 200 - count
  const longer = json.streams.length >= away ? away : json.streams.length
  for (let i = 0; i < longer; i++) {
    console.log(`${json.streams[i]._id} ${json.streams[i].channel.display_name}`)
    count++
  }
})

options = {
  url: `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=100&offset=100`,
  headers: {
    'Client-ID': '75ez6pscjzlxcv2ys0du2nvcxrfdai',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (error, response, body) => {
  const json = JSON.parse(body)
  if (!(json._total < 100)) {
    const away = 200 - count
    const longer = json.streams.length >= away ? away : json.streams.length
    for (let i = 0; i < longer; i++) {
      console.log(`${json.streams[i]._id} ${json.streams[i].channel.display_name}`)
      count++
    }
  }
})

options = {
  url: `https://api.twitch.tv/kraken/search/streams?query=${game}&limit=100&offset=200`,
  headers: {
    'Client-ID': '75ez6pscjzlxcv2ys0du2nvcxrfdai',
    Accept: 'application/vnd.twitchtv.v5+json'
  }
}

request(options, (error, response, body) => {
  const json = JSON.parse(body)
  if (!(json._total < 200)) {
    const away = 200 - count
    const longer = json.streams.length >= away ? away : json.streams.length
    for (let i = 0; i < longer; i++) {
      console.log(`${json.streams[i]._id} ${json.streams[i].channel.display_name}`)
      count++
    }
  }
})
