// Given a list of integers and a single sum value,
// return the first two values (parse from the left please)
// in order of appearance that add up to form the sum.

// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of
// 10,000,000 elements. Be sure your code doesn't time out.

var sum_pairs = function(ints, s) {
  let intsCopy = [...ints];
  let valueOfPair;
  let sumValueDifference;
  for (let value of ints) {
    sumValueDifference = s - value;
    intsCopy.shift();
    valueOfPair = intsCopy.find(element => {
      return element === sumValueDifference;
    });

    if (valueOfPair || valueOfPair === 0) {
      return [value, valueOfPair];
    }
  }
};
