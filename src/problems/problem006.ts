// https://projecteuler.net/problem=6
/*
  The sum of the squares of the first ten natural numbers is,
  1ˆ2 + 2ˆ2...2+10ˆ2 = 385

  The square of the sum of the first ten natural numbers is,
  (1+2...+10)ˆ2 = 3025

  Hence the difference between the sum of the squares of the
  first ten natural numbers and the square of the sum is .

  Find the difference between the sum of the squares of the
  first one hundred natural numbers and the square of the sum.
*/

function solution (number: number): number {
  const numbers = [...Array(number + 1).keys()].slice(1)
  const sumOfsquares = numbers.map((element) => { return Math.pow(element, 2) }).reduce((sum, element) => sum + element)
  const squareOfSum = Math.pow(numbers.reduce((sum, element) => sum + element), 2)

  return squareOfSum - sumOfsquares
}

export function problem006 (number: number): number {
  return solution(number)
}
