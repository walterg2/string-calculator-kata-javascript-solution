const { expect } = require('chai')
const StringCalculator = require('../lib/StringCalculator')

describe('add()', () => {
    before(function() {
        this.subject = new StringCalculator()
    })

    it('takes an empty string and returns 0', function() {
        expect(this.subject.add('')).to.eq(0)
    })

    it('takes a single number and returns that number', function() {
        expect(this.subject.add('3')).to.eq(3)
    })

    it('takes two numbers separated by a comma and returns their sum', function() {
        expect(this.subject.add('2,3')).to.eq(5)
    })
})
