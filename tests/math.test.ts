import { expect } from 'chai'
import { collatzSequence, factorial, isPrime, isPalindrome, toText } from '../src/helper/math'

describe('Math', function () {
  describe('collatzSequence', function () {
    const memo = {}
    it('Should return 10 for 13', function () {
      expect(collatzSequence(13, memo)).to.eql(10)
    })
    it('Should return 5 for 16', function () {
      expect(collatzSequence(16, memo)).to.eql(5)
    })
    it('Should return 6 for 5', function () {
      expect(collatzSequence(5, memo)).to.eql(6)
    })
  })
  describe('factorial', function () {
    it('Should return 2 for 2!', function () {
      expect(factorial(BigInt(2))).to.equal(BigInt(2))
    })
    it('Should return 6 for 3!', function () {
      expect(factorial(BigInt(3))).to.equal(BigInt(6))
    })
    it('Should return 24 for 4!', function () {
      expect(factorial(BigInt(4))).to.equal(BigInt(24))
    })
    it('Should return 120 for 5!', function () {
      expect(factorial(BigInt(5))).to.equal(BigInt(120))
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
      expect(isPrime(4)).to.equal(false)
    })
    it('Should return true for 5', function () {
      expect(isPrime(5)).to.equal(true)
    })
    it('Should return true for 6857', function () {
      expect(isPrime(6857)).to.equal(true)
    })
  })
  describe('isPalindrome', function () {
    it('Should return true for 1', function () {
      expect(isPalindrome(1, 10)).to.equal(true)
    })
    it('Should return true for 101', function () {
      expect(isPalindrome(101, 10)).to.equal(true)
    })
    it('Should return false for 100', function () {
      expect(isPalindrome(100, 10)).to.equal(false)
    })
    it('Should return true for 1001', function () {
      expect(isPalindrome(1001, 10)).to.equal(true)
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
    it('Should return "OneThousandAndFifteen" for 1015', function () {
      expect(toText(1015)).to.equal('OneThousandAndFifteen')
    })
    it('Should return "OneHundredAndOne" for 101', function () {
      expect(toText(101)).to.equal('OneHundredAndOne')
    })
  })
})
