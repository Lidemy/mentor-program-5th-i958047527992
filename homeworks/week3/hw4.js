// 把原字串拆解、反轉再組合，跟原字串比對是否相同
function isPalindrome(str) {
  const re = str.split('').reverse().join('')
  if (re === str) {
    console.log('True')
  } else {
    console.log('False')
  }
}

isPalindrome('sssssdddddsssss')
