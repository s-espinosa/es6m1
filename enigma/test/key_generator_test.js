const assert = require('assert')
const expect = require('chai').expect
const KeyGenerator = require('../lib/key_generator')

describe('KeyGenerator', () => {
  it('can generate a key', () => {
    const kg = new KeyGenerator

    expect(kg.generate()).to.be.a('string')
  })
})
