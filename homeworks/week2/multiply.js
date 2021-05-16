// 主要的程式部分
function multiply(a, b) {
  // 宣告暫存第二個數字的變數 temp
  let temp = b
  // 宣告存放每一位數乘完後的值的陣列 multiplyNumbers
  const multiplyNumbers = []
  // 宣告存放結果字串 result
  let result = ''
  // 讓 a 對 temp 每一位數進行乘法，並存進 multiplyNumbers
  for (let i = 0; i < b.length; i++) {
    // 對 temp 的最後一位與 a 相乘，並把結果存到 multiplyNumbers
    multiplyNumbers.push(add(a, temp[temp.length - 1], i))
    // temp 消去最後一位
    temp = temp.substring(0, temp.length - 1)
  }
  // 最後把 multiplyNumbers 陣列的結果總和起來
  result = sum(multiplyNumbers)
  return result
}

function add(num, multiplier, digit) {
  // 宣告存放結果字串 sum
  let sum = ''
  // 宣告存放進位的變數 carry
  let carry = 0
  // 從最後一位開始，計算 num 與 multiplier 的乘積
  for (let i = num.length - 1; i >= 0; i--) {
    // 把 num 跟乘數 multiplier 相乘，加上前一位的進位，取 mod 10 後，加到 sum 字串的前面
    sum = (Number(num[i]) * Number(multiplier) + carry) % 10 + sum
    // 把 num 跟乘數 multiplier 相乘，加上前一位的進位，除以 10 後的地板函數，作為進位 carry。
    carry = Math.floor((Number(num[i]) * Number(multiplier) + carry) / 10)
  }
  // 如果還有進位，則加到 sum 前方
  if (carry > 0) {
    sum = carry + sum
    carry = 0
  }
  // 補上原本乘數後面的 0
  if (digit > 0) {
    sum = sum + '0'.repeat(digit)
  }
  return sum
}

function sum(arr) {
  // 如果乘積只有一項，回傳該項
  if (arr.length === 1) {
    return arr[0]
  }
  // 宣告存放結果字串 total
  let total = ''
  // 宣告存放該位位數總和 sum
  let sum = 0
  // 宣告存放進位的變數 carry
  let carry = 0
  // 因為最後一項一定是最多位的，所以以那一項的位數作為基準
  for (let i = arr[arr.length - 1].length - 1; i >= 0; i--) {
    sum = 0
    // 找出每一項同一個位數，計算總和
    for (let i = 0; i < arr.length; i++) {
      const now = arr[i]
      if (now[now.length - 1]) {
        sum += Number(now[now.length - 1])
      }
      arr[i] = now.substring(0, now.length - 1)
    }
    // 把前一位的進位和總和加起來 mod 10 ，加到結果的前方
    total = (sum + carry) % 10 + total
    // 把前一位的進位和總和加起來除以 10 的地板函數，做為下一位的進位
    carry = Math.floor((sum + carry) / 10)
  }
  // 如果還有進位，則加到 total 前方
  if (carry > 0) {
    total = carry + total
    carry = 0
  }
  return total
}

// console.log(multiply('50000', '50000'))
// console.log(multiply('988946641651', '4651679746464'))
console.log(multiply('124902814902890825902840917490127902791247902479027210970941724092174091274902749012740921759037590347438758957283947234273942304239403274093275902375902374092410937290371093719023729103790123', '1239128192048129048129021830918209318239018239018239018249082490182490182903182390128390128903182309812093812093820938190380192381029380192381092380192380123802913810381203'))
