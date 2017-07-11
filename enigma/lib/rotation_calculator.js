class RotationCalculator {
  calculate(key) {
    const a = key.substr(0, 2)
    const b = key.substr(1, 2)
    const c = key.substr(2, 2)
    const d = key.substr(3, 2)

    const rotations = [a, b, c, d]

    return rotations.map((number) => {
      return parseInt(number)
    })
  }
}

module.exports = RotationCalculator
