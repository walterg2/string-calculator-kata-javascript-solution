module.exports =
class NegativeNumbersFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NegativeNumbersFoundError'
    }
}
