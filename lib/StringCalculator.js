module.exports =
class StringCalculator {
    constructor() {

    }

    add = (string) => {
        let numbers = string.split(',').map(Number)

        return numbers.reduce((a, b) => a + b)
    }
}
