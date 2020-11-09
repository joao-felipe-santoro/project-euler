// https://projecteuler.net/problem=9
/*
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.
  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/

function solution (sum: number): number {
  let product: number = 0
  for (let a = 1; a <= Math.ceil(sum / 2); a++) {
    for (let b = a + 1; b <= Math.ceil(sum / 2); b++) {
      for (let c = b + 1; c <= Math.ceil(sum / 2); c++) {
        if (a + b + c === sum && a * a + b * b === c * c) {
          product = a * b * c
        }
      }
    }
  }
  return product
}

export function problem009 (sum: number): number {
  return solution(sum)
}
