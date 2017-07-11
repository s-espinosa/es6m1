class KeyGenerator {
  generate() {
    const num = Math.floor(Math.random() * 89999) + 10000
    return num.toString()
  }
}

module.exports = KeyGenerator
