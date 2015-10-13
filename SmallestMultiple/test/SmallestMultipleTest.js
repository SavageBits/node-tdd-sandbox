var should = require('should');
var SmallestMultiple = require('../src/SmallestMultiple');

describe('SmallestMultiple', function() {
    var tests = [
        { args: [1, 2], expected: 2 },
        { args: [1, 2, 3], expected: 6 },
        { args: [1, 2, 3, 4], expected: 12 },
        { args: [1, 2, 3, 4, 5], expected: 60 },
        { args: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 2520 },
        { args: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], expected: 232792560 },
    ];

    tests.forEach(function(test) {
        it('should return the smallest even multiple given a set of positive numbers', function() {
            var sm = new SmallestMultiple();

            var res = sm.getSmallestMultiple.call(null, test.args);

            should(res).equal(test.expected);
        });
    });
});

//1, 2, 3, 4, 5
//5 + 5 = 10
//10 % 4 == 0? no
//10 + 5 = 15
//15 % 5? no
//15 + 5 = 20
//20 % 4? yes
//20 % 3? no
//20 + 5 = 25
//25 % 4 == 0? no
//30 no
//35 no
//40 no
//45 no
//50 no
//55
//60

