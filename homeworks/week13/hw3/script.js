function sendRequestGetTopFiveGames() {
  const params = 'limit=5'
  const getTopGamesApi = `https://api.twitch.tv/kraken/games/top?${params}`
  fetch(getTopGamesApi, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': '4knmnsxhq75og3y0cd0zil9x373vls'
    })
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json()
      } else {
        alert('系統不穩定，請再試一次')
      }
    }).then((jsonData) => {
      const listItem = document.querySelectorAll('.navbar__options li a')
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].innerText = jsonData.top[i].game.name
      }
      sendRequestGetStreams(jsonData.top[0].game.name)
      // 如果網路有錯誤，就彈出'系統不穩定，請再試一次'的視窗
    }).catch((error) => {
      console.log('error:', error)
      alert('系統不穩定，請再試一次')
    })
}

sendRequestGetTopFiveGames()

document.querySelector('.navbar__options').addEventListener('click', (e) => {
  sendRequestGetStreams(e.target.innerText)
})

function sendRequestGetStreams(gameName) {
  const params = `game=${gameName}&limit=20`
  const streamApi = `https://api.twitch.tv/kraken/streams/?${params}`

  fetch(streamApi, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': '4knmnsxhq75og3y0cd0zil9x373vls'
    })
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json()
      } else {
        alert('系統不穩定，請再試一次')
      }
    }).then((jsonData) => {
      const streamList = jsonData.streams
      const bannerList = document.querySelectorAll('.stream__screenshot')
      const logoList = document.querySelectorAll('.info__icon')
      const nameList = document.querySelectorAll('.description__player')
      const statusList = document.querySelectorAll('.description__name')
      const linkList = document.querySelectorAll('.game__streams a')
      document.querySelector('.game__name').innerText = gameName
      for (let i = 0; i < jsonData.streams.length; i++) {
        bannerList[i].style.backgroundImage = `url('${streamList[i].preview.large}')`
        logoList[i].style.backgroundImage = `url('${streamList[i].channel.logo}')`
        nameList[i].innerText = streamList[i].channel.display_name
        statusList[i].innerText = streamList[i].channel.status
        linkList[i].setAttribute('href', streamList[i].channel.url)
      }
      // 如果網路有錯誤，就彈出'系統不穩定，請再試一次'的視窗
    }).catch((error) => {
      console.log('error:', error)
      alert('系統不穩定，請再試一次')
    })
}
