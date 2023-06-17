// a program that checks which of the arrays among the nested arrays has the largest numbers and returns that array

function largestOfFour(arr) {
    let current = 0;
    let largest = [];
  for (let i=0; i<arr.length-1; i++){
    for (let j=0; j<arr[i].length; j++){
        if(arr[i][j] > arr[i+1][j]){
            largest = [...arr[i]];
        }
        largest = [...arr[i+1]];
    }
  }
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));