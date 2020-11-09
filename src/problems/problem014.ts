/*
  The following iterative sequence is defined for the set of positive integers:
      n → n/2 (n is even)
      n → 3n + 1 (n is odd)
  Using the rule above and starting with 13, we generate the following sequence:
      13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
  Which starting number, under one million, produces the longest chain?
  NOTE: Once the chain starts the terms are allowed to go above one million.
*/

import { collatzSequence } from '../helper/math'

function solution (number: number): number {
  let highestTerm = 0
  let count = 0
  let highestCount = 0
  const memo: {[x: number]: number} = {}

  for (let i = 2; i < number; i++) {
    count = collatzSequence(i, memo)
    if (highestCount < count) {
      highestTerm = i
      highestCount = count
    }
  }
  return highestTerm
}

export function problem014 (number: number): number {
  return solution(number)
}
