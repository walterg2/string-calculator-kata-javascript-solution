const { expect } = require('chai')
const NumberNotFoundError = require('../lib/NumberNotFoundError')

describe('NumberNotFoundError', () => {
    it('creates an error with the appropriate name', () => {
        const subject = new NumberNotFoundError()
        expect(subject).to.be.an.instanceof(Error)
        expect(subject.name).to.eq('NumberNotFoundError')
    })

    it('returns any user-defined message', () => {
        const subject = new NumberNotFoundError('muh error')
        expect(subject.message).to.eq('muh error')
    })
})
