/* eslint-disable @typescript-eslint/require-array-sort-compare */
// https://projecteuler.net/problem=36
/*
  The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
  Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
  (Please note that the palindromic number, in either base, may not include leading zeros.)
*/

import { isPalindrome } from '../helper/math'

function solution (maxValue: number): number {
  let sum = 0
  for (let i = 1; i < maxValue; i += 2) {
    if (isPalindrome(i, 10) && isPalindrome(i, 2)) {
      sum += i
    }
  }
  return sum
}

export function problem036 (maxValue: number): number {
  return solution(maxValue)
}
