function join(arr, concatStr) {
  if (arr.length === 0) {
    return ''
  }
  let newStr = ''
  for (let i = 0; i < arr.length - 1; i++) {
    newStr += arr[i]
    newStr += concatStr
  }
  newStr += arr[arr.length - 1]
  return newStr
}

function repeat(str, times) {
  let newStr = ''
  for (let i = 0; i < times; i++) {
    newStr += str
  }
  return newStr
}

console.log(join(['a'], '!'))
console.log(repeat(['a'], 5))
