// Given an NxN matrix, rotate it by 90 degree
// Perform 90 degree swap for each layer starting from out to in.

const RotateMatrix = (matrix) => {
  console.log(matrix);
  let n = matrix.length;

  for (let layer = 0; layer < n/2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];

      // top -> left
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }

  return matrix
};
