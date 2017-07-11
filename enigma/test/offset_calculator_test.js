const assert = require('assert')
const expect = require('chai').expect
const OffsetCalculator = require('../lib/offset_calculator')

describe('OffsetCalculator', () => {
  it('can calculate offsets given a date', () => {
    const oc   = new OffsetCalculator
    const date = new Date('2017-01-15')

    expect(oc.calculate(date)).to.deep.equal([3, 6, 8, 9])
  })
})
