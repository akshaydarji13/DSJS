// There are three types of edits that can be performed on strings: insert a character, remove a chracter or replace a character.
// Given two strings write a method to check if they are one edit (or zero edit) away.
// There are two approaches and both take O(n) time
// First approach is cleaner while second is complex but with no duplicate code and is compact
// You can chose whichever you want


// Solution 1
const oneAway1 = (string1, string2) => {
  if (string1.length === string2.length) {
    return oneEditReplace(string1, string2);
  }

  if (string1.length + 1 === string2.length) {
    return oneEditInsert(string1, string2);
  }

  if (string1.length - 1 === string2.length) {
    return oneEditInsert(string2, string1);
  }

  return false;
};

const oneEditReplace = (string1, string2) => {
  let foundDifference = false;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
    }
  }
  return true;
};

const oneEditInsert = (string1, string2) => {
  let i1 = 0;
  let i2 = 0;
  while (i1 < string1.length && i2 < string2.length) {
    if (string1[i1] !== string2[i2]) {
      if (i1 !== i2) {
        return false;
      }
      i2++;
    } else {
      i1++;
      i2++;
    }
  }
  return true;
};


// Solution 2
const oneAway2 = (string1, string2) => {
  // Check length
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  }

  // Get shorter and longer string
  let s1 = string1.length > string2.length ? string1 : string2;
  let s2 = string1.length > string2.length ? string2 : string1;

  let i1 = 0;
  let i2 = 0;
  let foundDifference = false;
  while (i1 < s1.length && i2 < s2.length) {
    if (s1[i1] !== s2[i2]) {
      // Ensure that this is the first difference found
      if (foundDifference) {
        return false;
      }
      foundDifference = true;
      if (s1.length === s2.length) {
        i2++;
      }
    } else {
      i2++;
    }
    i1++;
  }
  return true;
};
