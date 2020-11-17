function toText (number: number): string {
  const digits: {[id: number]: string} = {
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
  const teens: {[id: number]: string} = {
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
  const tens: {[id: number]: string} = {
    2: 'Twenty',
    3: 'Thirty',
    4: 'Forty',
    5: 'Fifty',
    6: 'Sixty',
    7: 'Seventy',
    8: 'Eighty',
    9: 'Ninety'
  }
  const digitsCount = number.toString().length
  let textValue = ''
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
function collatzSequence (number: number, memo?: { [x: string]: number }): number {
  let term = number
  let iterations = 1
  memo = memo ?? {}

  while (term > 1) {
    if (term in memo) {
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
  return iterations
}
function factorial (number: bigint): bigint {
  const ZERO = BigInt(0)
  const ONE = BigInt(1)
  let product: bigint
  if (number === ZERO) {
    return ONE
  } else {
    product = number * factorial(number - ONE)
  }
  return product
}
function isPrime (number: number): boolean {
  const sqRoot = Math.floor(Math.sqrt(number))

  for (let i = 2; i <= sqRoot; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}
function isPalindrome (number: number, base: number): boolean {
  const numString = number.toString(base)
  const invertedString = numString.split('').reverse()

  if (numString === invertedString.join('')) {
    return true
  }
  return false
}

export { collatzSequence, factorial, isPrime, isPalindrome, toText }
