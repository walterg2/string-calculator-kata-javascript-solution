const NumberNotFoundError = require('./NumberNotFoundError')
const NegativeNumbersFoundError = require('./NegativeNumbersFoundError')

module.exports =
class StringCalculator {
    constructor() {
        this._defaultDelimiter = /,|\n/
    }

    add = input => this._getNumberList(input).reduce((total, next) => total + next)

    multiply = (input) => this._getNumberList(input).reduce((total, next) => total * next)

    _parseString = (input) => {
        let result = this._defaultDelimiter,
            numberString = input.replace(/^\/\/.*\n/, ''),
            newDelimiter = input.match(/\/\/(.*)\n/)

        if (newDelimiter) result = newDelimiter[1]

        return [result, numberString]
    }

    _getNumberList = (input) => {
        let [delimiter, numberString] = this._parseString(input)

        if (new RegExp(`[${delimiter}]$`).test(input)) {
            throw new NumberNotFoundError('Number expected but EOF found.')
        }

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
