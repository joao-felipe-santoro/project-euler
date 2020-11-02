function isPrime (number) {
  const sqRoot = Math.floor(Math.sqrt(number))

  for (let i = 2; i <= sqRoot; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

function isPalindrome (number) {
  let modulusResult = 0
  let temp = 0
  let recomposedNumber = 0

  temp = number

  while (number > 0) {
    modulusResult = number % 10
    number = Math.floor(number / 10)
    recomposedNumber = recomposedNumber * 10 + modulusResult
  }
  if (recomposedNumber === temp) {
    return true
  }
  return false
}

export { isPrime, isPalindrome }
