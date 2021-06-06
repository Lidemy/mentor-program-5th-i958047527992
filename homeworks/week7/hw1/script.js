// 確認除了報名類型以外， input 是不是空的
function checkInput(name) {
  const target = document.querySelector(`input[name=${name}]`)
  // 如果 input 沒東西，就在最後加上一行'請記得填寫這格欄位'
  if (target.value.length === 0) {
    // 確認是否已經有加過'請記得填寫這格欄位'這行
    if (document.querySelector(`div.${name} p.blank`) === null) {
      const blankAlert = document.createElement('p')
      blankAlert.classList.add('blank')
      blankAlert.innerText = '請記得填寫這格欄位'
      document.querySelector(`div.${name}`).appendChild(blankAlert)
    }
    return false
  } else {
    // 如果 input 有東西，且原本有'請記得填寫這格欄位'這行，刪掉它
    const child = document.querySelector(`div.${name} p.blank`)
    if (child !== null) {
      child.parentNode.removeChild(child)
    }
    return true
  }
}
// 確認報名類型
function checkInputRadio() {
  // 把所有 type 是 radio 的 input 抓出來，一個個確認有沒有其中一個有被點選
  const options = document.querySelectorAll('input[type=radio]')
  let checked = false
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      checked = true
    }
  }
  // 如果沒有被點選，下面加一行'請記得選取其中一項'
  if (checked === false) {
    // 確認是否已經有加過'請記得選取其中一項'
    if (document.querySelector('div.type p.blank') === null) {
      const blankAlert = document.createElement('p')
      blankAlert.classList.add('blank')
      blankAlert.innerText = '請記得選取其中一項'
      document.querySelector('div.type').appendChild(blankAlert)
    }
  } else {
    // 如果 input 有東西，且原本有'請記得選取其中一項'這行，刪掉它
    const child = document.querySelector('div.type p.blank')
    if (child !== null) {
      child.parentNode.removeChild(child)
    }
  }
  return checked
}
// 取得被點選的選項的 id
function getTypeInput() {
  const options = document.querySelectorAll('input[type=radio]')
  let attributeId = ''
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      attributeId = options[i].getAttribute('id')
    }
  }
  return attributeId
}

document.querySelector('.submit').addEventListener('click', (e) => {
  // chrome 的按鈕預設，會重新整理頁面，所以要避免被重新整理，採用 preventDefault
  e.preventDefault()
  checkInput('nickname')
  checkInput('email')
  checkInput('number')
  checkInputRadio()
  checkInput('place')
  // 如果沒有任何未填的錯誤訊息，就顯示出填寫的資訊
  if (document.querySelectorAll('p.blank').length === 0) {
    console.log('okay')
    const info = `
    暱稱：${document.querySelector('input[name=nickname]').value}
    電子郵件：${document.querySelector('input[name=email]').value}
    手機號碼：${document.querySelector('input[name=number]').value}
    報名類型：${document.querySelector(`#${getTypeInput()}`).getAttribute('data-value')}
    怎麼知道這個活動？${document.querySelector('input[name=place]').value}
    `
    alert(info)
  }
}, true)
