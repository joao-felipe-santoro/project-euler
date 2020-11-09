// https://projecteuler.net/problem=5
/*
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

import { isPrime } from '../helper/math'

function solution (numbers: number[]): number {
  const dividers = []
  const primeNumbers = [2]

  numbers.sort((a, b) => { return a - b })
  // getting all primes until highest element of the array
  for (let i = 3; i <= numbers[numbers.length - 1]; i = i + 2) {
    if (isPrime(i)) {
      primeNumbers.push(i)
    }
  }

  let index = 0
  while (notAllOnes(numbers)) {
    let isDivisible = false
    numbers = numbers.map((element) => {
      if (element % primeNumbers[index] === 0) {
        isDivisible = true
        return element / primeNumbers[index]
      }
      return element
    })
    if (isDivisible) {
      dividers.push(primeNumbers[index])
    } else {
      index++
    }
  }
  return dividers.reduce((product, element) => product * element, 1)
}

function notAllOnes (numbers: number[]): boolean {
  let divided = false
  numbers.forEach((element) => {
    if (element !== 1) {
      divided = true
    }
  })
  return divided
}

export function problem005 (numbers: number[]): number {
  return solution(numbers)
}
