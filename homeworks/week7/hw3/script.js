// 如果按了刪除鍵，就把整行刪掉
document.querySelector('.todo__list').addEventListener('click', (e) => {
  if (e.target.classList.contains('del-btn')) {
    document.querySelector('.todo__list').removeChild(e.target.closest('.todo__item'))
    /** 另一種移除方法
     * let deletedRow = e.target.parentElement
     * deletedRow.remove()**/
  }
})

// 如果在文字輸入框按完案件
document.querySelector('.text__input').addEventListener('keyup', (e) => {
  const toDo = document.querySelector('.text__input').value
  // 並且按下的是 enter 鍵，而且是有文字，就在底下新加入這個 list item，並清空文字輸入框
  if (e.keyCode === 13 && toDo !== '') {
    const div = document.createElement('div')
    div.classList.add('todo__item')
    div.innerHTML = `
    <label class="container">
      ${toDo}
      <div class="tooltip__finished">
        <span class="tooltiptext">完成</span>
        <input type="checkbox" class="todo__checkBox">
        <span class="checkmark"></span>
      </div>
    </label>
    <div class="tooltip__del-btn">
      <span class="tooltiptext">刪除</span>
      <button class="del-btn">X</button>
    </div>
    `
    document.querySelector('.todo__list').appendChild(div)
    document.querySelector('.text__input').value = ''
  }
})

// 當 checkbox 或文字被點擊，就把整個元素，掛上 checked 這個 class 變成透明狀，並且把文字元素，掛上 line-through，加上刪除線。
document.querySelector('.todo__list').addEventListener('click', (e) => {
  if (e.target.classList.contains('checkmark')) {
    e.target.parentElement.parentElement.parentElement.classList.toggle('checked')
    e.target.parentElement.parentElement.classList.toggle('line-through')
  }
  if (e.target.classList.contains('container')) {
    e.target.classList.toggle('line-through')
    e.target.parentElement.classList.toggle('checked')
  }
})
