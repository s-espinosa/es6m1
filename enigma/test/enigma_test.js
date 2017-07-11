const assert = require('assert')
const expect = require('chai').expect
const Enigma = require('../lib/enigma')

describe('Enigma', () => {
  it('can encrypt a message', () => {
    const e       = new Enigma()
    const message = "hello"
    const key     = '12345'
    const date    = new Date('2017-01-15')

    expect(e.encrypt(message, '12345', new Date('2017-01-15'))).to.equal('w7;G3')
  })

  it('can encrypt message without a key or date', () => {
    const e = new Enigma()
    const message = "hello"

    expect(e.encrypt(message)).to.be.a('string')
  })

  it('can decrypt a message', () => {
    const e = new Enigma()
    const message = "hello"
    const encrypted = e.encrypt(message, '12345', new Date('2017-01-15'))

    expect(e.decrypt(encrypted, '12345', new Date('2017-01-15'))).to.equal(message)
  })

  it('can decrypt without a date', () => {
    const e = new Enigma()
    const message = "hello"
    const encrypted = e.encrypt(message, '12345')

    expect(e.decrypt(encrypted, '12345')).to.equal(message)
  })

  it('can crack a message', () => {
    const e = new Enigma()
    const message = "hello ..end.."
    const encrypted = e.encrypt(message, '12345', new Date('2017-01-15'))

    expect(e.crack(encrypted, new Date('2017-01-15'))).to.equal(message)
  })

  it('can crack a message without a date', () => {
    const e = new Enigma()
    const message = "hello ..end.."
    const encrypted = e.encrypt(message)

    expect(e.crack(encrypted)).to.equal(message)
  })
})
