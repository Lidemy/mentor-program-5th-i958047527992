// 輸入範圍 start~end
function lily(start, end) {
  for (let i = start; i <= end; i++) {
    if (isLily(i)) {
      console.log(i)
    }
  }
}
// 判斷是否為水仙花數
function isLily(n) {
  let sum = 0
  let copy = n
  const len = Math.ceil(Math.log10(n + 1))
  while (copy !== 0) {
    sum += (copy % 10) ** len
    copy = Math.floor(copy / 10)
  }
  return sum === n
}

lily(5, 200)
