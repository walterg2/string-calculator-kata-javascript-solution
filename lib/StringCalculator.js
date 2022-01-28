const NumberNotFoundError = require('./NumberNotFoundError')
const NegativeNumbersFoundError = require('./NegativeNumbersFoundError')

module.exports =
class StringCalculator {
    constructor() {
        this._defaultDelimiter = /,|\n/
    }

    add = (string) => {
        let delimiter = this._getDelimter(string) ?? this._defaultDelimiter

        let numbers = this._getNumberList(string, delimiter)

        return numbers.reduce((a, b) => a + b)
    }

    _getDelimter = (string) => {
        let newDelimiter = string.match(/\/\/(.*)\n/)

        if (newDelimiter) return newDelimiter[1]
    }

    _getNumberList = (string, delimiter) => {
        if (new RegExp(`[${delimiter}]$`).test(string)) {
            throw new NumberNotFoundError('Number expected but EOF found.')
        }

        let numberString = string.replace(/^\/\/.*\n/, '')

        return this._checkForNegativeNumbers(numberString.split(delimiter).map(Number))
    }

    _checkForNegativeNumbers = (numbers) => {
        let negativeNumbers = numbers.filter(number => this._isNegative(number))

        if (negativeNumbers.length !== 0) throw new NegativeNumbersFoundError(`Negative not allowed : ${negativeNumbers.join(', ')}`)

        return numbers
    }

    _isNegative = (number) => {
        return Math.sign(number) === -1
    }
}
