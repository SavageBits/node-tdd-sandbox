module.exports = SmallestMultiple;

function SmallestMultiple() {}

SmallestMultiple.prototype.getSmallestMultiple = function(numbers) {
  var allMultiplesAreValid = function(numbers, multiple) {
    var returnVal = true;

    //had to use .every to break the loop on return
    // .foreach ignored return and kept going
    numbers.every(function(number) {
      if (multiple % number  != 0) {
        returnVal = false;

        return returnVal;
      }

      return returnVal;
    });

    return returnVal;
  };

  if (numbers.length > 1) {
    var smallestMultiple = numbers[numbers.length - 1];
    var shouldKeepGoing = true;

    while (shouldKeepGoing) {
      shouldKeepGoing = !allMultiplesAreValid(numbers, smallestMultiple);
      if(shouldKeepGoing) smallestMultiple++;
    }

    return smallestMultiple;
  }

  return numbers;
};


//doesn't work - whatever node is doing when loading/calling methods, you can't call one prototype method
// inside of another without passing it in as a callback or something
//SmallestMultiple.prototype.allMultiplesAreValid = function(numbers, multiple) {
//  console.log('here');
//
//  numbers.forEach(function(number) {
//    if (multiple % number != 0) {
//      return false;
//    }
//  });
//
//  return true;
//};