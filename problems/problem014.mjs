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

import { collatzSequence } from '../helper/math.mjs'

function solution (number) {
  let startingTerm = 0
  let highestCount = 0
  let memo = {}
  const iterations = []

  let sequence = []
  for (let i = 2; i < number; i++) {
    sequence = collatzSequence(i, memo)
    memo = sequence.memo
    iterations.push(sequence.iterations)
  }
  iterations.forEach((iteration) => {
    if (highestCount < iteration.length) {
      startingTerm = iteration[0]
      highestCount = iteration.length
    }
  })
  return startingTerm
}

export function problem014 (number) {
  return solution(number)
}
