const arrayUtils = require('./index.js');

console.log(arrayUtils.sumArray([1, 2, 3, 4])); // O/P : 10
console.log(arrayUtils.clearDuplicates([1, 2, 2, 3])); // O/P : [1, 2, 3]
console.log(arrayUtils.maxInArray([1, 2, 3, 4])); // O/P : 4
console.log(arrayUtils.minInArray([1, 2, 3, 4])); // O/P : 1
console.log(arrayUtils.flattenArray([1, [2, 3], [4, [5]]])); // O/P : [1, 2, 3, 4, 5]
console.log(arrayUtils.countOccurrences([1, 2, 2, 3, 3, 3])); // O/P : { '1'O/P : 1, '2'O/P : 2, '3'O/P : 3 }
console.log(arrayUtils.removeFalsyValues([0, 1, false, 2, '', 3])); // O/P : [1, 2, 3]
console.log(arrayUtils.intersection([1, 2, 3], [2, 3, 4])); // O/P : [2, 3]
console.log(arrayUtils.difference([1, 2, 3], [2, 3, 4])); // O/P : [1]
console.log(arrayUtils.chunkArray([1, 2, 3, 4, 5], 2)); // O/P : [[1, 2], [3, 4], [5]]
