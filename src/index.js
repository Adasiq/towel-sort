
// You should implement your task here.
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if (matrix === undefined) {
      return [];
   }
   let result = [];
   for (var i = 0; i < matrix.length; i++) {
      if (i%2 == 0) {
         result.push(...matrix[i]);
      } else{
         result.push(...matrix[i].reverse());
      }
   }
  return result;
}
