function fibonacci (term, memo) {
  memo = memo || {}

  if (memo[term]) {
    return memo[term]
  }

  if (term === 0) {
    return 1
  }
  if (term === 1) {
    return 2
  }
  memo[term] = fibonacci(term - 1, memo) + fibonacci(term - 2, memo)
  return memo[term]
}

export { fibonacci }
