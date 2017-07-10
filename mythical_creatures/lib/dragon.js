class Dragon {
  constructor(name, color, rider) {
    this.name   = name
    this.color  = color
    this.rider  = rider
    this.eaten  = 0
  }

  isHungry() {
    return this.eaten < 3
  }

  eat() {
    this.eaten += 1
  }
}

module.exports = Dragon
