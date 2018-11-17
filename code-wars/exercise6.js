// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let evenArray = [];
  let oddArray = [];  
  if (array.length === 0) { return array };

  array.map((value, index) => {
    if (value % 2 === 0 || value === 0) {
      evenArray.push([value, index]);
    } else {
      oddArray.push(value);
    }
  });

  oddArray.sort(function(a, b) {
    return a - b;
  });

  evenArray.map((value) => {
    oddArray.splice(value[1], 0, value[0]);
  });

  return oddArray

  }