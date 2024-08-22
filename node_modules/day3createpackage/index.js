const arrayUtils = {
    
    // 1. Sum of all elements in an array
    sumArray: function(arr) {
      return arr.reduce((acc, val) => acc + val, 0);
    },
  
    // 2. Clear all duplicate elements from an array
    clearDuplicates: function(arr) {
      return [...new Set(arr)];
    },
  
    // 3. Find the maximum element in an array
    maxInArray: function(arr) {
      return Math.max(...arr);
    },
  
    // 4. Find the minimum element in an array
    minInArray: function(arr) {
      return Math.min(...arr);
    },
  
    // 5. Flatten a nested array
    flattenArray: function(arr) {
      return arr.flat(Infinity);
    },
  
    // 6. Count the occurrences of each element in an array
    countOccurrences: function(arr) {
      return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
    },
  
    // 7. Remove all falsy values from an array
    removeFalsyValues: function(arr) {
      return arr.filter(Boolean);
    },
  
    // 8. Find the intersection of two arrays
    intersection: function(arr1, arr2) {
      return arr1.filter(val => arr2.includes(val));
    },
  
    // 9. Get the difference between two arrays
    difference: function(arr1, arr2) {
      return arr1.filter(val => !arr2.includes(val));
    },
  
    // 10. Chunk an array into smaller arrays of a specified size
    chunkArray: function(arr, size) {
      const result = [];
      for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
      }
      return result;
    }
  };
  
  module.exports = arrayUtils;
  