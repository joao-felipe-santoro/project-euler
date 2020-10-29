const fibonacci = (term) => {
  if (term === 0) {
    return 1
  }
  if (term === 1) {
    return 2
  }
  return fibonacci(term - 1) + fibonacci(term - 2)
}

module.exports = {
  fibonacci (term) {
    return fibonacci(term)
  }
}
