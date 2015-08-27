module.exports = LargestPalindrome;

function LargestPalindrome() {}

LargestPalindrome.prototype.isPalindrome = function(val) {
    return val == val.toString().split("").reverse().join("");
};

LargestPalindrome.prototype.getLargestPalindromic = function() {
    var palindromes = [];

    for(var i = 100; i < 1000; i++)
        for(j = 100; j < 1000; j++)
            if (this.isPalindrome(i * j))
                palindromes.push(i * j);

    return Math.max.apply(Math, palindromes);
};