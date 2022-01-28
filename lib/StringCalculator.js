const NumberNotFoundError = require('./NumberNotFoundError')

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

        return numberString.split(delimiter).map(Number)
    }
}
