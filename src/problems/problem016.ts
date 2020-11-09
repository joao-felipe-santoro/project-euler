/*
  215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
  What is the sum of the digits of the number 21000?
*/

function solution (number: bigint, power: bigint): string {
  const TEN: bigint = BigInt(10)
  const NINE: bigint = BigInt(9)
  let result = number ** power
  let sum = BigInt(0)

  while (result > NINE) {
    sum += result % TEN
    result = (result - result % TEN) / TEN
  }
  sum += result
  return sum.toString()
}

export function problem016 (number: bigint, power: bigint): string {
  return solution(number, power)
}
