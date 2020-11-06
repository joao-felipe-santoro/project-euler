// https://projecteuler.net/problem=9
/*
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.
  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
*/

const solution = (sum) => {
  for (let a = 1; a <= Math.ceil(sum / 2); a++) {
    for (let b = a + 1; b <= Math.ceil(sum / 2); b++) {
      for (let c = b + 1; c <= Math.ceil(sum / 2); c++) {
        if (a + b + c === sum && a * a + b * b === c * c) {
          console.log('triplet:', a, b, c)
          return a * b * c
        }
      }
    }
  }
}

export function problem009 (sum) {
  return solution(sum)
}
