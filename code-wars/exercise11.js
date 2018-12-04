// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  // sorts digits in asc order
  const sortedDigits = number => {
    return number
      .toString()
      .split("")
      .sort((a, b) => a - b);
  };

  // sort the digits in n
  let sortedArray = sortedDigits(n);
  let nSorted = sortedArray.join("");

  // find total # of permutations
  const nLength = sortedArray.length;
  let possibilities = 1;
  for (x = 10; x > 10 - nLength; x--) {
    possibilities *= x;
  }

  console.log(nSorted);
  console.log(possibilities);
  // runs through numbers
  let sortedNumber;
  for (x = n + 1; x <= possibilities; x++) {
    console.log(x);
    sortedNumber = sortedDigits(x).join("");
    console.log(sortedNumber);
    if (sortedDigits(x) === nSorted) {
      return x;
    }
  }
  return -1;
}

// redo with recursion instead
