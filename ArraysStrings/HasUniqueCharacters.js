// Determine if string has all unique chracters

const hasUniqueCharacters = function (input) {
  if (input.length > 256) {
    return false;
  }
  let Array = [];
  for (let i = 0; i < input.length; i++) {
    let val = input.charCodeAt(i);
    if (Array[val]) {
      return false;
    }
    Array[val] = true;
  }
  return true;
}
