const assert = require('assert')
const expect = require('chai').expect
const Encryptor = require('../lib/encryptor')

describe('Encryptor', () => {
  it('can calculate total shift', () => {
    const e = new Encryptor("hello", [1, 2, 3, 4], [12, 23, 34, 45])

    expect(e.totalShift()).to.deep.equal([13, 25, 37, 49])
  })

  it('can find a letter in the alphabet', () => {
    const e = new Encryptor("hello", [1, 2, 3, 4], [12, 23, 34, 45])

    expect(e.findPosition("C")).to.equal(2)
    expect(e.findPosition("c")).to.equal(28)
    expect(e.findPosition("9")).to.equal(61)
    expect(e.findPosition("\\")).to.equal(83)
    expect(e.findPosition("|")).to.equal(84)
  })

  it('can find a position in the alphabet', () => {
    const e = new Encryptor("hello", [1, 2, 3, 4], [12, 23, 34, 45])

    expect(e.findLetter(2)).to.equal("C")
    expect(e.findLetter(87)).to.equal("C")
    expect(e.findLetter(28)).to.equal("c")
    expect(e.findLetter(113)).to.equal("c")
    expect(e.findLetter(61)).to.equal("9")
    expect(e.findLetter(83)).to.equal("\\")
    expect(e.findLetter(84)).to.equal("|")
    expect(e.findLetter(46)).to.equal("u")
    expect(e.findLetter(55)).to.equal("3")
    expect(e.findLetter(74)).to.equal("]")
    expect(e.findLetter(86)).to.equal("B")
    expect(e.findLetter(53)).to.equal("1")
  })

  it('can find a positions of an array of letters', () => {
    const e = new Encryptor("hello", [1, 2, 3, 4], [12, 23, 34, 45])

    expect(e.findPositions(["A", "B", "C"])).to.deep.equal([0, 1, 2])
  })



  it('can encrypt a message', () => {
    const e = new Encryptor("hello", [1, 2, 3, 4], [12, 23, 34, 45])

    expect(e.encrypt()).to.equal("u3]B1")
  })


})
