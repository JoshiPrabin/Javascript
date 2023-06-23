function dropElements(arr, func) {
    for(let i = arr[0]; !func(i) ; i++){
        arr.shift();
    }
    return arr;
  }
  
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));