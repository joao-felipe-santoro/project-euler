const isPrime = (num) => {
  const sqRoot = Math.floor(Math.sqrt(num))

  for (let i = 2; i <= sqRoot; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

module.exports = {
  isPrime (num) {
    return isPrime(num)
  }
}
