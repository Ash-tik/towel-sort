
module.exports = function towelSort (matrix) {

  if (matrix === undefined) {
    var matrix = [];
  };

  for (let i=0; i < matrix.length; i++) {
    if (i%2 != 0) {
      matrix[i] = matrix[i].reverse();
    } 
  }

  return matrix.flat();
}
