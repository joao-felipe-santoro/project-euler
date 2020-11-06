import pkg from 'chai'
import { collatzSequence, factorial, isPrime, isPalindrome, toText } from '../helper/math.js'
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
  describe('toText', function () {
    it('Should return "One" for 1', function () {
      expect(toText(1)).to.equal('One')
    })
    it('Should return "Two" for 2', function () {
      expect(toText(2)).to.equal('Two')
    })
    it('Should return "Three" for 3', function () {
      expect(toText(3)).to.equal('Three')
    })
    it('Should return "Four" for 4', function () {
      expect(toText(4)).to.equal('Four')
    })
    it('Should return "Five" for 5', function () {
      expect(toText(5)).to.equal('Five')
    })
    it('Should return "Six" for 6', function () {
      expect(toText(6)).to.equal('Six')
    })
    it('Should return "Seven" for 7', function () {
      expect(toText(7)).to.equal('Seven')
    })
    it('Should return "Eight" for 8', function () {
      expect(toText(8)).to.equal('Eight')
    })
    it('Should return "Nine" for 19', function () {
      expect(toText(9)).to.equal('Nine')
    })
    it('Should return "Ten" for 10', function () {
      expect(toText(10)).to.equal('Ten')
    })
    it('Should return "Eleven" for 11', function () {
      expect(toText(11)).to.equal('Eleven')
    })
    it('Should return "OneHundred" for 100', function () {
      expect(toText(100)).to.equal('OneHundred')
    })
    it('Should return "OneThousand" for 1000', function () {
      expect(toText(1000)).to.equal('OneThousand')
    })
    it('Should return "OneThousandOneHundred" for 1100', function () {
      expect(toText(1100)).to.equal('OneThousandOneHundred')
    })
    it('Should return "OneThousandOneHundredAndTen" for 1110', function () {
      expect(toText(1110)).to.equal('OneThousandOneHundredAndTen')
    })
    it('Should return "OneThousandOneHundredAndEleven" for 1111', function () {
      expect(toText(1111)).to.equal('OneThousandOneHundredAndEleven')
    })
    it('Should return "NineThousandNineHundredAndNinetyNine" for 9999', function () {
      expect(toText(9999)).to.equal('NineThousandNineHundredAndNinetyNine')
    })
    it('Should return "ThreeHundredAndFortyTwo" for 342', function () {
      expect(toText(342)).to.equal('ThreeHundredAndFortyTwo')
    })
  })
})
