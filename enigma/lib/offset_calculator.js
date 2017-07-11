class OffsetCalculator {
  calculate(date) {
    let month = (date.getUTCMonth() + 1)
    const day   = date.getUTCDate().toString()
    const year  = date.getUTCFullYear().toString().substr(2,2)

    if(month.toString().length === 1) {
      month = "0" + month.toString()
    }

    const dateString = day + month + year
    const squared = parseInt(dateString) ** 2

    const squaredString = squared.toString()
    const lastFour      = squaredString.substring(squaredString.length - 4)
    const lastStrings   = lastFour.split("")
    const lastDigits    = lastStrings.map(function(number) {
      return parseInt(number)
    })

    return lastDigits
  }
}

module.exports = OffsetCalculator

