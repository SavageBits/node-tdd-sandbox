var should = require('should');
var LargestPalindrome = require('../src/LargestPalindrome');

describe('LargestPalindrome', function() {

    tests = [
        { args: [99], expected: true },
        { args: [98], expected: false },
        { args: [9009], expected: true }
    ];

    tests.forEach(function(test) {
        it('should return ' + test.expected + ' for ' + test.args, function () {
            var lp = new LargestPalindrome();

            //may need to use .apply so keep an eye out, kid
            var res = lp.isPalindrome.apply(this, test.args);

            should(res).equal(test.expected);
        });
    });

    it('should return the largest palindrome of two 1-digit numbers', function() {
        var lp = new LargestPalindrome();

        var res = lp.getLargestPalindromic();

        should(res).equal(906609);
    });
});