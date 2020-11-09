// https://projecteuler.net/problem=8
/*
  The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

function solution (sequence: string, size: number): number {
  let product
  let highestProduct = 0
  let highestProductDigits: number[] = []
  let digitsToWork
  for (let i = 0; i < sequence.length - size - 1; i++) {
    digitsToWork = Array.from(sequence.substring(i, i + size))
    digitsToWork = digitsToWork.map((element) => { return parseInt(element) })
    product = digitsToWork.reduce((product, element) => product * element, 1)

    if (product > highestProduct) {
      highestProduct = product
      highestProductDigits = digitsToWork
    }
  }
  console.log('digits:', highestProductDigits)
  return highestProduct
}

export function problem008 (sequence: string, size: number): number {
  return solution(sequence, size)
}
