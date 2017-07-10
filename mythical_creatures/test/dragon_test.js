const assert = require('assert')
const expect = require('chai').expect
const Dragon = require('../lib/dragon')

describe('Dragon', () => {
  it('has a name', () => {
    const dragon = new Dragon("Ramoth", "gold", "Lessa")

    expect(dragon.name).to.equal("Ramoth")
  })

  it('has a color', () => {
    const dragon = new Dragon("Ramoth", "gold", "Lessa")

    expect(dragon.color).to.equal("gold")
  })

  it('has a rider', () => {
    const dragon = new Dragon("Ramoth", "gold", "Lessa")

    expect(dragon.rider).to.equal("Lessa")
  })

  it('can have a different name', () => {
    const dragon = new Dragon("Mnementh", "bronze", "F'lar")

    expect(dragon.name).to.equal("Mnementh")
  })

  it('can have a different rider', () => {
    const dragon = new Dragon("Mnementh", "bronze", "F'lar")

    expect(dragon.rider).to.equal("F'lar")
  })

  it('can have a different color', () => {
    const dragon = new Dragon("Mnementh", "bronze", "F'lar")

    expect(dragon.color).to.equal("bronze")
  })

  it('is born hungry', () => {
    const dragon = new Dragon("Canth", "brown", "F'nor")

    expect(dragon.isHungry()).to.be.true
  })

  it('eats a lot', () => {
    const dragon = new Dragon("Canth", "brown", "F'nor")

    expect(dragon.isHungry()).to.be.true
    dragon.eat()
    expect(dragon.isHungry()).to.be.true
    dragon.eat()
    expect(dragon.isHungry()).to.be.true
    dragon.eat()
    expect(dragon.isHungry()).to.be.false
  })
})
