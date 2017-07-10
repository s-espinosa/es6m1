const assert = require('assert')
const expect = require('chai').expect
const Hobbit = require('../lib/hobbit')

describe('Hobbit', () => {
  it('has a name', () => {
    const hobbit = new Hobbit("Bilbo")

    expect(hobbit.name).to.equal("Bilbo")
  })

  it('is named something else', () => {
    const hobbit = new Hobbit("Peregrin")

    expect(hobbit.name).to.equal("Peregrin")
  })

  it('has an unadventurous disposition', () => {
    const hobbit = new Hobbit("Samwise")

    expect(hobbit.disposition).to.equal("homebody")
  })

  it('can have a different disposition', () => {
    const hobbit = new Hobbit("Frodo", "adventurous")

    expect(hobbit.disposition).to.equal("adventurous")
  })

  it('grows older when celebrating birthdays', () => {
    const hobbit = new Hobbit("Meriadoc")

    for(let i = 0; i < 5; i++ ) {
      hobbit.celebrateBirthday()
    }

    expect(hobbit.age).to.equal(5)
  })

  it('is considered a child at 32', () => {
    const hobbit = new Hobbit("Gerontius")

    for(let i = 0; i < 32; i++) {
      hobbit.celebrateBirthday()
    }

    expect(hobbit.isAdult()).to.be.false
  })

  it('is considered an adult at 33', () => {
    const hobbit = new Hobbit("Otho")

    for(let i = 0; i < 33; i++) {
      hobbit.celebrateBirthday()
    }

    expect(hobbit.isAdult()).to.be.true
  })

  it('is old at 101', () => {
    const hobbit = new Hobbit("Otho")

    for(let i = 0; i < 101; i++) {
      hobbit.celebrateBirthday()
    }

    expect(hobbit.isOld()).to.be.true
  })

  it('is the ring if its name is Frodo', () => {
    const frodo = new Hobbit("Frodo")
    const sam   = new Hobbit("Sam")

    expect(frodo.hasRing()).to.be.true
    expect(sam.hasRing()).to.be.false
  })

  it('is short', () => {
    const hobbit = new Hobbit("Frodo")

    expect(hobbit.isShort()).to.be.true
  })
})
