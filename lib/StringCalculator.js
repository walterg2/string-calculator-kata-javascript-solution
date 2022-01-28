const NumberNotFoundError = require('./NumberNotFoundError')

module.exports =
class StringCalculator {
    constructor() {

    }

    add = (string) => {
        if (/[,|\n]$/.test(string)) {
            throw new NumberNotFoundError('Number expected but EOF found.')
        }

        let numbers = string.split(/,|\n/).map(Number)

        return numbers.reduce((a, b) => a + b)
    }
}
