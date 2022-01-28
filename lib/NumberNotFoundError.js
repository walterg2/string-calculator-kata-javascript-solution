
module.exports =
class NumberNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NumberNotFoundError'
    }
}
