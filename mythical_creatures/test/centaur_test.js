const assert = require('assert')
const expect = require('chai').expect
const Centaur = require('../lib/centaur')

describe('Centaur', () => {
  it('has a name', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.name).to.equal("George")
  })

  it('has a breed', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.breed).to.equal("Palomino")
  })

  it('has excellent bow skills', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.shoot()).to.equal("Twang!!!")
  })

  it('makes a horse sound when it runs', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.run()).to.equal("Clop clop clop clop!!!")
  })

  it('is not cranky when it is first created', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.isCranky()).to.be.false
  })

  it('is standing when it is first created', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.isStanding()).to.be.true
  })

  it('is cranky after running or shooting a bow three times', () => {
    const centaur = new Centaur("George", "Palomino")
    expect(centaur.isCranky()).to.be.false

    centaur.run()
    centaur.shoot()
    centaur.run()

    expect(centaur.isCranky()).to.be.true
  })

  it('will not shoot when cranky', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.shoot()
    centaur.shoot()
    centaur.shoot()

    expect(centaur.shoot()).to.equal("NO!")
  })

  it('will not shoot when cranky', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.shoot()
    centaur.shoot()
    centaur.shoot()

    expect(centaur.run()).to.equal("NO!")
  })

  it('will not sleep when standing', () => {
    const centaur = new Centaur("George", "Palomino")

    expect(centaur.sleep()).to.equal("NO!")
  })

  it('can lay down', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.layDown()

    expect(centaur.isStanding()).to.be.false
    expect(centaur.isLaying()).to.be.true
  })

  it('can sleep when it is laying down', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.layDown()

    expect(centaur.sleep()).to.not.equal("NO!")
  })

  it('cannot shoot a bow when laying down', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.layDown()

    expect(centaur.shoot()).to.equal("NO!")
  })

  it('cannot run when laying down', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.layDown()

    expect(centaur.run()).to.equal("NO!")
  })

  it('cannot run when laying down', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.layDown()
    centaur.standUp()

    expect(centaur.isStanding()).to.be.true
  })

  it('is no longer cranky after sleeping', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.shoot()
    centaur.shoot()
    centaur.shoot()
    centaur.layDown()
    centaur.sleep()

    expect(centaur.isCranky()).to.be.false
    centaur.standUp()
    expect(centaur.shoot()).to.equal("Twang!!!")
    expect(centaur.run()).to.equal("Clop clop clop clop!!!")
  })

  it('is no longer cranky after drinking a potion', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.shoot()
    centaur.shoot()
    centaur.shoot()
    expect(centaur.isCranky()).to.be.true
    centaur.drinkPotion()

    expect(centaur.isCranky()).to.be.false
    expect(centaur.shoot()).to.equal("Twang!!!")
    expect(centaur.run()).to.equal("Clop clop clop clop!!!")
  })

  it('cannot drink a potion when laying down', () => {
    const centaur = new Centaur("George", "Palomino")

    centaur.layDown()

    expect(centaur.drinkPotion()).to.equal("NO!")

  })

  it('becomes sick if it drinks a potion while rested', () => {
    const centaur = new Centaur("George", "Palomino")

    expect(centaur.drinkPotion()).to.equal("Ugh...")
  })
})

