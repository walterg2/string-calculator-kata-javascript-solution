const { expect } = require('chai')
const StringCalculator = require('../lib/StringCalculator')

describe('add()', () => {
    before(function() {
        this.subject = new StringCalculator()
    })

    it('can take an empty string and return 0', function() {
        expect(this.subject.add('')).to.eq(0)
    })

    it('can take a single number and return that number', function () {
        expect(this.subject.add('3')).to.eq(3)
    })
})
