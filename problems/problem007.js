// https://projecteuler.net/problem=7
/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
  What is the 10 001st prime number?
*/

const { isPrime } = require('../helper/math.js')

const solution = (num) => {
  const primes = [2]
  let i = 3
  while (primes.length < num) {
    if (isPrime(i)) {
      primes.push(i)
    }
    i = i + 2
  }
  return primes.pop()
}

module.exports = {
  problem007 (num, memo) {
    return solution(num, memo)
  }
}
