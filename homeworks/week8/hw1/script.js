// 當點擊我要抽獎時，會發送 request 到後端並回傳獎項訊息
document.querySelector('.lottery').addEventListener('click', () => {
  sendRequest()
})

function sendRequest() {
  const request = new XMLHttpRequest()
  request.onload = () => {
    // 如果代碼不是在 200~3XX 之間，就表示系統不穩，跳出'系統不穩定，請再試一次'的視窗
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText
      const json = JSON.parse(response)
      const { prize } = json
      // 因為我的設定是原本抽獎頁面和中獎頁面的格子，分別在不同的 container 底下，所以在這會用兩者對 hidden 這個 class 進行開關操作來切換
      document.querySelector('.container').classList.toggle('hidden')
      document.querySelector('.container__prize').classList.toggle('hidden')
      document.querySelector('.banner').classList.toggle('prize__banner')
      // 中不同的獎項，把指定的標題內容修改成獎品內容，再加上該獎項的 class 來更換背景圖片
      if (prize === 'FIRST') {
        document.querySelector('.title__prize').innerText = '恭喜你中頭獎了！日本東京來回雙人遊！'
        document.querySelector('.banner').classList.add('prize__banner__1')
      } else if (prize === 'SECOND') {
        document.querySelector('.title__prize').innerText = '二獎！90 吋電視一台！'
        document.querySelector('.banner').classList.add('prize__banner__2')
      } else if (prize === 'THIRD') {
        document.querySelector('.title__prize').innerText = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
        document.querySelector('.banner').classList.add('prize__banner__3')
      } else if (prize === 'NONE') {
        document.querySelector('.title__prize').innerText = '銘謝惠顧'
        document.querySelector('.title__prize').style.color = 'white'
        document.querySelector('.banner').classList.add('prize__banner__4')
      } else {
        // 如果回傳四種獎項以外的訊息，就彈出'系統不穩定，請再試一次'的視窗
        document.querySelector('.container').classList.toggle('hidden')
        document.querySelector('.container__prize').classList.toggle('hidden')
        document.querySelector('.banner').classList.toggle('prize__banner')
        alert('系統不穩定，請再試一次')
      }
    } else {
      alert('系統不穩定，請再試一次')
    }
  }
  // 如果網路層有錯誤，就彈出'系統不穩定，請再試一次'的視窗
  request.onerror = () => {
    alert('系統不穩定，請再試一次')
  }

  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true)
  request.send()
}

// 抽完獎想再抽一次點選按鈕回到原頁面樣式，並把原本修改的部分還原
document.querySelector('.lottery__back').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('hidden')
  document.querySelector('.container__prize').classList.toggle('hidden')
  document.querySelector('.banner').classList.toggle('prize__banner')
  document.querySelector('.title__prize').style.color = 'black'
  for (let i = 1; i < 5; i++) {
    document.querySelector('.banner').classList.remove(`prize__banner__${i}`)
  }
  // document.querySelector('.banner').style.backgroundImage = `url('./pic/bg-lottery.png')`;
})
