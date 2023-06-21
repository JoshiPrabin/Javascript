// sum of all numbers in a range

function sumAll(arr) {
    let maxm = Math.max(arr[0], arr[1]);
    let minm = Math.min(arr[0], arr[1]);
    let sum = 0;
    for(let i = minm; i <= maxm; i++){
        sum += i;
    }
    return sum;
}

console.log(sumAll([1, 4]));