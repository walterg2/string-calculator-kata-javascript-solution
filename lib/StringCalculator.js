module.exports =
class StringCalculator {
    constructor() {

    }

    add = (string) => {
        if (string === '') return 0

        let [first, second] = string.split(',').map(Number)

        return (first ?? 0) + (second ?? 0)
    }
}
