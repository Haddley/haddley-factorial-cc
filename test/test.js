var module = require('../addon')
var expect = require('chai').expect;

describe('#factorial()', function () {


    // test recursive function
    it('should calculate factorial of 9 using recursion', function () {
        // add an assertion
        expect(module.factorial(9)).to.equal(362880);
    })

    // test tail recursion version
    it('should calculate factorial of 9 using tail recursion', function () {
        // add an assertion
        expect(module.factorial_tr(9)).to.equal(362880);
    })

    // test iteration version
    it('should calculate factorial of 9 using iteration', function () {
        // add an assertion
        expect(module.factorial_it(9)).to.equal(362880);
    })

    // test tail recursion version
    it('should calculate factorial of 170 using recursion', function () {
        // add an assertion
        expect(module.factorial(170)).to.equal(7.257415615307994e+306);
    })

    // test tail recursion version
    it('should calculate factorial of 170 using tail recursion', function () {
        // add an assertion
        expect(module.factorial_tr(170)).to.equal(7.257415615308004e+306);
    })

    // test iteration version
    it('should calculate factorial of 170 using iteration', function () {
        // add an assertion
        expect(module.factorial_it(170)).to.equal(7.257415615308004e+306);
    })

    // test tail recursion version
    it('should calculate factorial of 171 using recursion', function () {
        // add an assertion
        expect(module.factorial(171)).to.equal(Infinity);
    })

    // test tail recursion version
    it('should calculate factorial of 171 using tail recursion', function () {
        // add an assertion
        expect(module.factorial_tr(171)).to.equal(Infinity);
    })

    // test iteration version
    it('should calculate factorial of 171 using iteration', function () {
        // add an assertion
        expect(module.factorial_it(171)).to.equal(Infinity);
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

    // test recursive function
    it('should calculate factorial of 1600000 using tail recursion', function () {
        this.timeout(10000);
        // add an assertion
        expect(module.factorial_it(1600000)).to.equal(Infinity);
    })


})