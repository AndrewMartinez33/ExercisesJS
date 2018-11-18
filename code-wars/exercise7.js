// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// Here's how it works:

// digital_root(16)
// => 1 + 6
// => 7


// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6


function digital_root(n) {
  let nArray = n.toString().split("");
  let finalNumber;
    
  do {
    finalNumber = nArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
    nArray = finalNumber.toString().split("");
    
  } while (nArray.length > 1);

  return finalNumber;  
}