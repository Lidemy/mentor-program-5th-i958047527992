function compete(str) {
  const nums = str.split(' ')
  const a = BigInt(nums[0])
  const b = BigInt(nums[1])
  const direction = Number(nums[2])
  if (a === b) {
    console.log('DRAW')
  } else if (direction === 1) {
    if (a > b) {
      console.log('A')
    } else {
      console.log('B')
    }
  } else {
    if (a > b) {
      console.log('B')
    } else {
      console.log('A')
    }
  }
}

compete('2 2 1')
