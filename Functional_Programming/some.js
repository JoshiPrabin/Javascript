function checkPositive(arr) {
    return arr.some(function(current){
      return current > 0;
    });
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));