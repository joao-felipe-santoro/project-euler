const isPrime = (num) => {
  const sqRoot = Math.floor(Math.sqrt(num))

  for (let i = 2; i <= sqRoot; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const isPalindrome = (number) => {
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

module.exports = {
  isPrime (num) {
    return isPrime(num)
  },
  isPalindrome (number) {
    return isPalindrome(number)
  }
}
