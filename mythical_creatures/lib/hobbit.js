class Hobbit {
  constructor(name, disposition = "homebody"){
    this.name        = name
    this.disposition = disposition
    this.age         = 0
  }

  celebrateBirthday() {
    this.age += 1
  }

  isAdult() {
    return this.age > 32
  }

  isOld() {
    return this.age > 100
  }

  hasRing() {
    return this.name == "Frodo"
  }

  isShort() {
    return true
  }
}

module.exports = Hobbit
