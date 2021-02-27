var module = require('../addon')
var expect = require('chai').expect;

describe('#factorial()', function () {


    // test recursive function
    it('should calculate factorial of 9 using recursion', function () {
        // add an assertion
        expect(module.factorial(9)).to.equal(362880);
    })

    // test recursive function
    it('should calculate factorial of 9 using tail recursion', function () {
        // add an assertion
        expect(module.factorial_tr(9)).to.equal(362880);
    })

    // test recursive function
    it('should calculate factorial of 200000 using recursion', function () {
        this.timeout(10000);
        // add an assertion
        expect(module.factorial(200000)).to.equal(Infinity);
    })

    // test recursive function
    it('should calculate factorial of 800000 using tail recursion', function () {
        this.timeout(10000);
        // add an assertion
        expect(module.factorial_tr(800000)).to.equal(Infinity);
    })


})