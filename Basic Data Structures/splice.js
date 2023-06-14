//A program to remove all elements so that only those remain whose sum is 10

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.shift();
arr.splice(2,4); // first argument is the index from where to start removing and second is for how many items to remove
console.log(arr);