function destroyer(arr, ...valsToRemove) {
    return arr.filter(item => !valsToRemove.includes(item));
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));