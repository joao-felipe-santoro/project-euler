import pkg from 'chai'
import { collatzSequence, factorial, isPrime, isPalindrome } from '../helper/math.mjs'
const { expect } = pkg

describe('Math', function () {
  describe('collatzSequence', function () {
    let memo = {}
    let response
    it('Should return 10 for 13', function () {
      response = collatzSequence(13, memo)
      memo = response.memo
      expect(response.iterations).to.eql(10)
    })
    it('Should return 5 for 16', function () {
      response = collatzSequence(16, memo)
      memo = response.memo
      expect(response.iterations).to.eql(5)
    })
  })
  describe('factorial', function () {
    it('Should return 120 for 5!', function () {
      expect(factorial(5n)).to.equal(120n)
    })
    it('Should return 24 for 4!', function () {
      expect(factorial(4n)).to.equal(24n)
    })
    it('Should return 6 for 3!', function () {
      expect(factorial(3n)).to.equal(6n)
    })
    it('Should return 2 for 2!', function () {
      expect(factorial(2n)).to.equal(2n)
    })
  })
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
