// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let array = str.split(" ");
  for (let [arrIndex, value] of array.entries()) {
    if (value.search(/[\W]/)) {
      array[arrIndex] = `${value.substring(1)}${value[0]}${'ay'}`
    } 
  }
  return array.join(' ');
}