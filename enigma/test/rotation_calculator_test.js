const assert = require('assert')
const expect = require('chai').expect
const RotationCalculator = require('../lib/rotation_calculator')

describe('RotationCalculator', () => {
  it('can calculate rotations given a key', () => {
    const rc  = new RotationCalculator
    const key = "12345"

    expect(rc.calculate(key)).to.deep.equal([12, 23, 34, 45])
  })
})
