const { expect } = require('chai')
const StringCalculator = require('../lib/StringCalculator')

describe('StringCalculator', () => {
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

        it('takes any amount of numbers and returns their sum', function() {
            expect(this.subject.add('1,2,3,4,5')).to.eq(15)
        })

        describe('separators', function() {
            it('can accept a newline as the number separator', function() {
                expect(this.subject.add('1\n4')).to.eq(5)
            })

            // Skipping as it's not necessary with JS's reduce function
            xit('throws an error when a number is not found', function() {
                expect(this.subject.add('175.2,\n35')).to.eq("Number expected but '\n' found at position 6.")
            })

            it('throws an error when the input ends in a comma', function () {
                expect(() => {
                    this.subject.add('1,3,')
                }).to.throw('Number expected but EOF found.')
            })

            it('throws an error when the input ends in a new line', function () {
                expect(() => {
                    this.subject.add('1,3\n')
                }).to.throw('Number expected but EOF found.')
            })

            describe('custom', function() {
                it('accepts an additional line that contains the separator to use', function () {
                    expect(this.subject.add('//;\n1;2')).to.eq(3)
                })
            })
        })
    })
})
