function collatzSequence (number, memo) {
  let term = number
  let iterations = 1
  memo = memo || {}

  while (term > 1) {
    if (memo[term]) {
      iterations += memo[term]
      break
    }
    if (term % 2 === 1) {
      term = term * 3 + 1
      iterations++
    }
    term = term / 2
    iterations++
  }
  memo[number] = iterations
  return { iterations: iterations, memo: memo }
}

function factorial (number) {
  let product = 1n
  while (number > 1n) {
    product = product * number
    number--
  }
  return product
}

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

export { collatzSequence, factorial, isPrime, isPalindrome }
