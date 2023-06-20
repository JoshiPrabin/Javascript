const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    let newArr =[];
    newArr = newArr.concat(arr);
    return newArr.sort(function(a,b){
    return a-b;
  })
}

console.log(nonMutatingSort(globalArray));