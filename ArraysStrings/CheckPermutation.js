// Given two strings, write a method to decide one is permutation of the other
// If we want the function to not behave case sensitive than conver both the string to uppercase or lowercase first
// Rmove th whitespaces first from the string if whitespaces are not significant

const CheckPermuation = function (string1, string2) {
  if(string1.length !== string2.length) {
    return false;
  }

  let letters = new Float32Array(256);

  for (let i = 0; i < string1.length; i++) {
    letters[string1.charCodeAt(i)]++;
  }

  for (let i = 0; i < string2.length; i++) {
    let c = string2.charCodeAt(i);
    letters[c]--
    if (letters[c] < 0) {
      return false;
    }
  }
  return true;
};
