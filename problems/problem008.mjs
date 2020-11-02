// https://projecteuler.net/problem=8
/*
  The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
*/

const solution = (sequence, size) => {
  let product
  let highestProduct = 0

  for (let i = 0; i < sequence.length - size - 1; i++) {
    product = Array.from(sequence.substring(i, i + size))
      .map((element) => { return parseInt(element) })
      .reduce((product, element) => product * element, 1)

    highestProduct = product > highestProduct ? product : highestProduct
  }

  return highestProduct
}

export function problem008 (sequence, size) {
  return solution(sequence, size)
}
