module.exports = FizzBuzz;

function FizzBuzz() {
    this.fizzbuzz = function(val)
    {
        if (val % 3 == 0 && val % 5 == 0)
            return 'fizzbuzz';
        else if (val % 5 == 0)
            return 'buzz';
        else if (val % 3 == 0)
            return 'fizz';

        return val;
    }
}