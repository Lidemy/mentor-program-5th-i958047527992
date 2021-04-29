function solve(lines) {
  for (let i = 1; i < lines.length; i++) {
    if (isPrime(Number(lines[i]))) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}
function isPrime(n) {
  if (n === 1) {
    return false
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

solve([5, 1, 2, 3, 4, 5])
