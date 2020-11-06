// https://projecteuler.net/problem=20
/*
  n! means n × (n − 1) × ... × 3 × 2 × 1
  For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
  Find the sum of the digits in the number 100!
*/
import { factorial } from '../helper/math.js'

const solution = (num) => {
  const memo = {}
  const fact = factorial(num, memo)
  return sumDigits(fact)
}

function sumDigits (number) {
  const string = number.toString()
  let sum = 0
  for (const char of string) {
    sum += +char
  }
  return sum
}

export function problem020 (num) {
  return solution(num)
}
