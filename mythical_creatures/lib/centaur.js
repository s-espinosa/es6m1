class Centaur {
  constructor(name, breed) {
    this.name     = name;
    this.breed    = breed;
    this.standing = true;
    this.actions  = 0
    this.sleeping = false
  }

  shoot() {
    if(this.isCranky() || this.isLaying()) { return "NO!" }
    this.addActions()
    return "Twang!!!"
  }

  run() {
    if(this.isCranky() || this.isLaying()) { return "NO!" }
    this.addActions()
    return "Clop clop clop clop!!!"
  }

  sleep() {
    if(this.standing) { return "NO!" }
    this.sleeping = true
    this.actions  = 0
  }

  layDown() {
    this.standing = false
  }

  standUp() {
    this.standing = true
  }

  drinkPotion() {
    if(this.isLaying()) {
      return "NO!"
    } else if(this.actions == 0) {
      return "Ugh..."
    } else {
      this.actions = 0
    }
  }

  isCranky() {
    return this.actions >= 3
  }

  isStanding() {
    return this.standing
  }

  isLaying() {
    return !this.standing
  }

  isSleeping() {
    return this.sleeping
  }

  addActions(){
    this.actions += 1
  }
}

module.exports = Centaur
