const OffsetCalculator   = require('./offset_calculator')
const RotationCalculator = require('./rotation_calculator')
const Encryptor          = require('./encryptor')

class Enigma {
  encrypt(message, key, date) {
    const oc = new OffsetCalculator
    const rc = new RotationCalculator

    const offset    = oc.calculate(date)
    const rotation  = rc.calculate(key)

    const ec = new Encryptor(message, offset, rotation)
    const encrypted = ec.encrypt()

    return encrypted
  }
}

module.exports = Enigma
