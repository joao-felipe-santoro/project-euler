/* eslint-disable @typescript-eslint/require-array-sort-compare */
// https://projecteuler.net/problem=22
/*
  Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order.
  Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
  For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.
  What is the total of all the name scores in the file?
*/

function solution (names: string[]): number {
  let namesScoresSum: number = 0
  const sortedNames = names.sort()
  sortedNames.map((name, index) => {
    let nameValue = 0
    name.split('').map((char) => {
      nameValue += char.charCodeAt(0) - 64
      return nameValue
    })
    namesScoresSum += (index + 1) * nameValue
    return namesScoresSum
  })
  return namesScoresSum
}

export function problem022 (names: string[]): number {
  return solution(names)
}
