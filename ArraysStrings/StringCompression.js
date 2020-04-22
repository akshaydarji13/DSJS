// Implement a method to perform basic string compression using the counts of repeated characters
// Here we trim the input string first. Ask the interviewer if leading and trailing spaces are important

const StringCompression = (input) => {
  input = input.trim();
  let count = 0;
  let compressed = '';
  for (let i = 0; i < input.length; i++) {
    count++

    if (i + 1 >= input.length || input[i] !== input[i+1]) {
      compressed = compressed + input[i] + count;
      count = 0;
    }
  }
  return compressed.length < input.length ? compressed : input;
}
