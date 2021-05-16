function add(a, b) {
  // 先把兩個數字轉換為 2 進位字串
  const a2 = a.toString(2)
  const b2 = b.toString(2)
  // 接著把他們反轉過來，從個位數開始計算
  let a2Reverse = a2.split('').reverse().join('')
  let b2Reverse = b2.split('').reverse().join('')
  // 設定 temp 存進位
  let temp = 0
  // 設 calculate_reverse 為加完後的反轉 2 進位答案
  let calculateReverse = ''
  // 計算 a 與 b 哪一個二進位數擁有比較多位數
  const maxLength = a2Reverse.length > b2Reverse.length ? a2Reverse.length : b2Reverse.length
  // 如果反轉的 2 進位答案還沒到長度還沒超過最多位數的數字，就繼續計算
  while (calculateReverse.length < maxLength) {
    // 先抓出兩個反轉數的第一個位數
    const a = Number(a2Reverse[0])
    const b = Number(b2Reverse[0])
    // 如果 a、b 兩數與進位 temp 都是 1 的話，則在反轉數答案尾巴加上 1，進設定進位數 temp 為 1
    if (a & b & temp) {
      calculateReverse = calculateReverse.concat('1')
      temp = 1
    // 如果 a、b 兩數與進位 temp 其中兩個是 1，則在反轉數答案尾巴加上 0，進設定進位數 temp 為 1
    } else if ((a & b) || (a & temp) || (temp & b)) {
      calculateReverse = calculateReverse.concat('0')
      temp = 1
    // 其他直接在尾巴加上 a, b, temp 三數的 or 結果
    } else {
      calculateReverse = calculateReverse.concat((a || b || temp))
      temp = 0
    }
    // a,b 兩個反轉數去掉第一位數
    a2Reverse = a2Reverse.slice(1)
    b2Reverse = b2Reverse.slice(1)
    // 如果其中一個數已經沒了，補 0
    if (a2Reverse === '') {
      a2Reverse = '0'
    } else if (b2Reverse === '') {
      b2Reverse = '0'
    }
  }
  // 最後檢查是否還有進位，有的話反轉數答案加 1
  if (temp === 1) {
    temp = 0
    calculateReverse = calculateReverse.concat('1')
  }
  // 反轉數答案反轉回來
  const calculate = calculateReverse.split('').reverse().join('')
  // 把答案從 2 進位轉回 10 進位
  const answer = parseInt(calculate, 2)
  // 輸出答案
  return answer
}

console.log(add(100, 100))
