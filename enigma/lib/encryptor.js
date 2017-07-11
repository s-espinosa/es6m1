class Encryptor {
  constructor(message, offset, rotation) {
    this.message  = message
    this.offset   = offset
    this.rotation = rotation
  }

  alphabet() {
    return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
            "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "!", "@",
            "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", ",", ".", "<",
            ">", ";", ":", "/", "?", "\\","|"
           ]
  }

  totalShift() {
    const merged = []
    for(let i = 0; i < 4; i++) {
      merged[i] = this.offset[i] + this.rotation[i]
    }
    return merged
  }

  findPosition(letter) {
    return this.alphabet().findIndex((element) => {
      return element === letter
    })
  }

  findLetter(position) {
    const index = position % this.alphabet().length
    return this.alphabet()[index]
  }

  encrypt() {
    const letters   = this.message.split("")
    const positions = this.findPositions(letters)
    const shifted   = this.shiftPositions(positions)
    const shiftedLetters = this.findLetters(shifted)
    return shiftedLetters.join("")
  }

  findPositions(letters) {
    return letters.map((letter) => {
      return this.findPosition(letter)
    })
  }

  findLetters(positions) {
    return positions.map((position) => {
      return this.findLetter(position)
    })
  }

  shiftPositions(positions) {
    const totalShift = this.totalShift()
    return positions.map((position, index) => {
      return position + totalShift[index % 4]
    })
  }
}

module.exports = Encryptor
