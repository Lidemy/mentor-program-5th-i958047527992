function sendRequestGetTopFiveGames() {
  const request = new XMLHttpRequest()
  request.onload = () => {
    // 如果代碼不是在 200~3XX 之間，就表示系統不穩，跳出'系統不穩定，請再試一次'的視窗
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText
      const json = JSON.parse(response)
      const listItem = document.querySelectorAll('.navbar__options li a')
      for (let i = 0; i < listItem.length; i++) {
        listItem[i].innerText = json.top[i].game.name
      }
      sendRequestGetStreams(json.top[0].game.name)
    } else {
      alert('系統不穩定，請再試一次')
    }
  }
  // 如果網路層有錯誤，就彈出'系統不穩定，請再試一次'的視窗
  request.onerror = () => {
    alert('系統不穩定，請再試一次')
  }
  const params = 'limit=5'
  request.open('GET', `https://api.twitch.tv/kraken/games/top?${params}`, true)
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.setRequestHeader('Client-ID', '4knmnsxhq75og3y0cd0zil9x373vls')
  request.send()
}

sendRequestGetTopFiveGames()

document.querySelector('.navbar__options').addEventListener('click', (e) => {
  sendRequestGetStreams(e.target.innerText)
})

function sendRequestGetStreams(gameName) {
  const request = new XMLHttpRequest()
  request.onload = () => {
    // 如果代碼不是在 200~3XX 之間，就表示系統不穩，跳出'系統不穩定，請再試一次'的視窗
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText
      const json = JSON.parse(response)
      const streamList = json.streams
      const bannerList = document.querySelectorAll('.stream__screenshot')
      const logoList = document.querySelectorAll('.info__icon')
      const nameList = document.querySelectorAll('.description__player')
      const statusList = document.querySelectorAll('.description__name')
      const linkList = document.querySelectorAll('.game__streams a')
      document.querySelector('.game__name').innerText = gameName
      for (let i = 0; i < json.streams.length; i++) {
        bannerList[i].style.backgroundImage = `url('${streamList[i].preview.large}')`
        logoList[i].style.backgroundImage = `url('${streamList[i].channel.logo}')`
        nameList[i].innerText = streamList[i].channel.display_name
        statusList[i].innerText = streamList[i].channel.status
        linkList[i].setAttribute('href', streamList[i].channel.url)
      }
    } else {
      alert('系統不穩定，請再試一次')
    }
  }
  // 如果網路層有錯誤，就彈出'系統不穩定，請再試一次'的視窗
  request.onerror = () => {
    alert('系統不穩定，請再試一次')
  }
  console.log(gameName)
  const params = `game=${gameName}&limit=20`
  request.open('GET', `https://api.twitch.tv/kraken/streams/?${params}`, true)
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.setRequestHeader('Client-ID', '4knmnsxhq75og3y0cd0zil9x373vls')
  request.send()
}
