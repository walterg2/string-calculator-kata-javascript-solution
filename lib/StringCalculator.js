const { interfaces } = require("mocha")

module.exports =
class StringCalculator {
    constructor() {

    }

    add = (string) => {
        if (string === '') return 0

        return parseInt(string)
    }
}
