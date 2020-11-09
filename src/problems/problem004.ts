// https://projecteuler.net/problem=4
/*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
  Find the largest palindrome made from the product of two 3-digit numbers.
*/

import { isPalindrome } from '../helper/math'

function solution (digits: number): number {
  let floor = 1
  let ceiling = 10
  for (let i = 1; i < digits; i++) {
    floor = floor * 10
    ceiling = ceiling * 10
  }

  let highestProduct = 0
  let product
  for (let i = floor; i < ceiling; i++) {
    for (let j = floor; j < ceiling; j++) {
      product = i * j
      if (isPalindrome(product) && product > highestProduct) {
        highestProduct = product
      }
    }
  }
  return highestProduct
}

export function problem004 (digits: number): number {
  return solution(digits)
}
