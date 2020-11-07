const digits = {
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine'
}
const teens = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sexteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
}
const tens = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety'
}

function toText (number) {
  const digitsCount = number.toString().length
  let textValue = ''
  // if (number < 0 || number > 10000) {
  //   return 'Valid range is: 1 to 9999'
  // }
  if (number === 0) {
    return ''
  }
  if (number < 10) {
    return textValue.concat(digits[number])
  }
  if (number < 20) {
    return textValue.concat(teens[number])
  }
  const remainder = number % (10 ** (digitsCount - 1))
  const leftDigit = Math.floor(number / (10 ** (digitsCount - 1)))
  switch (digitsCount) {
    case 4:
      textValue = digits[leftDigit].concat('Thousand')
      if (remainder < 100 && remainder > 0) {
        textValue = textValue.concat('And')
      }
      break
    case 3:
      textValue = digits[leftDigit].concat('Hundred')
      if (remainder !== 0) {
        textValue = textValue.concat('And')
      }
      break
    case 2:
      textValue = tens[leftDigit]
      break
  }
  return textValue.concat(toText(remainder))
}

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

function factorial (number, memo) {
  memo = memo || {}
  let product
  if (memo[number]) {
    return memo[number]
  }
  if (number === 0n) {
    return 1n
  } else {
    product = number * factorial(number - 1n)
  }
  memo[number] = product
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

export { collatzSequence, factorial, isPrime, isPalindrome, toText }
