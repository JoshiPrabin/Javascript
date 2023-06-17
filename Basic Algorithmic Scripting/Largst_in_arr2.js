/* a program that checks the largest in a array of nested arrays and returns an array of the
largest numbers from each array. */

function largestOfFour(arr) {
    let largest = 0;
    let largestArr = [];
    for(let i = 0; i<arr.length; i++){
        largest = arr[i][0];
        for(let j = 0; j<arr[i].length; j++){
            if(arr[i][j] > largest){
                largest = arr[i][j];
            }
        }
        largestArr.push(largest);
    }
    return largestArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));