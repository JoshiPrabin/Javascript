// Removing falsy values from an array

function bouncer(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
console.log(bouncer([7, "ate", "", false, 9]));