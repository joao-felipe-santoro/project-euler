function fibonacci (term: number, memo?: {[x: number]: number}): number {
  memo = memo ?? {}
  if (memo[term] !== undefined) {
    return memo[term]
  }
  if (term === 0 || term === 1) {
    return term + 1
  }
  memo[term] = fibonacci(term - 1, memo) + fibonacci(term - 2, memo)
  return memo[term]
}
export { fibonacci }
