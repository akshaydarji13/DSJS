// Given a string, write a function to check if it is a permutation of a palindrome
// Please ask for the required output if the input string is empty or only contains spaces

const PalindromePermutation = (input) => {
  let data = input.toLowerCase().trim();
  if (data === '') {
    return false
  }
  let table = buildCharFrequencyTable(data);
  return checkMaxOneOdd(table);
};

const buildCharFrequencyTable = (input) => {
  let array = input.split('');
  let table = new Float32Array(26);
  for(let i = 0; i< array.length; i++) {
    if (array[i] !== ' ') {
      let index = 'z'.charCodeAt(0) - array[i].charCodeAt(0);
      table[index]++
    }
  }
  return table;
};

const checkMaxOneOdd = (table) => {
  let foundOdd = false;
  for (let i = 0; i < table.length; i++) {
    if(table[i] % 2 === 1) {
      if (foundOdd) {
        return false;
      }
      foundOdd = true;
    }
  }
  return true;
};
