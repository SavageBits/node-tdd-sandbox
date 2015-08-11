var should = require('should');
var FizzBuzz = require('../src/FizzBuzz');

describe('fizzbuzz()', function() {

    //function scope + hoisting (see declaration below)
    tests = [
        { args: [2], expected: 2 },
        { args: [4], expected: 4 }
    ]

    tests.forEach(function(test) {
        it('should return the number if not a multiple of 3 or 5', function() {
            var fizzbuzz = new FizzBuzz();

            var res = fizzbuzz.fizzbuzz.apply(this, test.args);

            should(res).equal(test.expected);
        });
    });

    //hoisting in action
    var tests = [
        { args: [3], expected: 'fizz' },
        { args: [6], expected: 'fizz' },
        { args: [9], expected: 'fizz' }
    ];

    tests.forEach(function(test) {
        it('should return fizz for ' + test.args, function() {
            var fizzbuzz = new FizzBuzz();
            var res = fizzbuzz.fizzbuzz.apply(this, test.args);
            should(res).equal(test.expected);
        });
    });

    tests = [
        { args: [5], expected: 'buzz' },
        { args: [10], expected: 'buzz' }
    ];

    tests.forEach(function(test) {
        it('should return buzz for ' + test.args, function() {
            var fizzbuzz = new FizzBuzz();

            var res = fizzbuzz.fizzbuzz.apply(this, test.args);
            should(res).equal(test.expected);
        });
    });

    tests = [
        { args: [15], expected: 'fizzbuzz' },
        { args: [30], expected: 'fizzbuzz' }
    ];

    tests.forEach(function(test) {
        it('should return fizzbuzz for multiples of 3 and 5', function() {
            var fizzbuzz = new FizzBuzz();

            var res = fizzbuzz.fizzbuzz.apply(this, test.args);

            should(res).equal(test.expected);
        });
    });

});
