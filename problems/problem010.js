// https://projecteuler.net/problem=10
/*
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
  Find the sum of all the primes below two million.
*/

import { isPrime } from '../helper/math.js'

const solution = (number) => {
  let sum = 2
  for (let i = 3; i <= number; i += 2) {
    if (isPrime(i)) {
      sum = sum + i
    }
  }
  return sum
}

export function problem010 (number) {
  return solution(number)
}
