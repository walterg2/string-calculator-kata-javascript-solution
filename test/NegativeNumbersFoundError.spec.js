const { expect } = require('chai')
const NegativeNumbersFoundError = require('../lib/NegativeNumbersFoundError')

describe('NegativeNumbersFoundError', () => {
    it('creates an error with the appropriate name', () => {
        const subject = new NegativeNumbersFoundError()
        expect(subject).to.be.an.instanceof(Error)
        expect(subject.name).to.eq('NegativeNumbersFoundError')
    })

    it('returns any user-defined message', () => {
        const subject = new NegativeNumbersFoundError('muh error')
        expect(subject.message).to.eq('muh error')
    })
})
