// this function duplicates the array passed to it as many times as indicated by the second parameter

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      newArr.push([...arr]);
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));