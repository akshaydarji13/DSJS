// Write a method to replace all spaces in a string with '%20'.

const URLify = function(input) {
  let array = input.trim().split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ' ') {
      array[i] = '%20';
    }
  }
  return array.join('');
}
