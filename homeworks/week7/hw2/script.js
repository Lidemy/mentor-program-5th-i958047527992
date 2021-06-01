document.querySelector('.faqs__list').addEventListener('click', (e) => {
  // 因為用超連結包裹清單，所以要避免瀏覽器預設的超連結行為，跳轉到其他頁
  e.preventDefault()
  // 如果點擊的是解答，則不會做任何事
  if (e.target.classList.contains('answer')) {
  // 如果點擊的是問題，而且底下沒有解答，就秀出解答
  } else if (e.target.getElementsByClassName('answer').length === 0) {
    const answer = document.createElement('div')
    answer.classList.add('answer')
    answer.innerHTML = `
    ${e.target.getAttribute('data-answer')}
    `
    e.target.appendChild(answer)
  // 如果點擊的是問題，而且底下有解答，就隱藏解答
  } else {
    e.target.removeChild(e.target.querySelector('.answer'))
  }
})
