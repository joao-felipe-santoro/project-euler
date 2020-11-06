/*
  215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
  What is the sum of the digits of the number 21000?
*/

function solution (number, power) {
  let result = number ** power
  let sum = 0n

  while (result > 9n) {
    sum += result % 10n
    result = (result - result % 10n) / 10n
  }
  sum += result
  return sum.toString()
}

export function problem016 (number, power) {
  return solution(number, power)
}
