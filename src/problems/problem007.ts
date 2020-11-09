// https://projecteuler.net/problem=7
/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10 001st prime number?
*/

import { isPrime } from '../helper/math'

function solution (num: number): number | undefined {
  let prime = 2
  let primeCount = 1
  let i = 3
  while (primeCount < num) {
    if (isPrime(i)) {
      prime = i
      primeCount++
    }
    i = i + 2
  }
  return prime
}

export function problem007 (num: number): number | undefined {
  return solution(num)
}
