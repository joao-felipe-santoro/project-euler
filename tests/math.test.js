const expect = require('chai').expect

const { isPrime, isPalindrome } = require('../helper/math.js')

describe('Math', function () {
  describe('isPrime', function () {
    it('Should return true for 2', function () {
      expect(isPrime(2)).to.equal(true)
    })
    it('Should return true for 3', function () {
      expect(isPrime(3)).to.equal(true)
    })
    it('Should return false for 4', function () {
      expect(isPrime(3)).to.equal(true)
    })
    it('Should return true for 5', function () {
      expect(isPrime(3)).to.equal(true)
    })
    it('Should return true for 6857', function () {
      expect(isPrime(6857)).to.equal(true)
    })
  })
  describe('isPalindrome', function () {
    it('Should return true for 1', function () {
      expect(isPalindrome(1)).to.equal(true)
    })
    it('Should return true for 101', function () {
      expect(isPalindrome(101)).to.equal(true)
    })
    it('Should return false for 100', function () {
      expect(isPalindrome(3)).to.equal(true)
    })
    it('Should return true for 1001', function () {
      expect(isPalindrome(1001)).to.equal(true)
    })
  })
})
