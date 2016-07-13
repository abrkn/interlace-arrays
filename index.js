var assert = require('assert');

module.exports = function interlaceArrays(arrays) {
  assert(Array.isArray(arrays));

   var length = Math.max.apply(Math, arrays.map(function(array) {
     return array.length;
   }));

   var result = [];

   for (var itemIndex = 0; itemIndex < length; itemIndex++) {
      for (var arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++) {
         if (arrays[arrayIndex].length - 1 < itemIndex) {
            continue;
         }
         result.push(arrays[arrayIndex][itemIndex]);
      }
   }

   return result;
};
