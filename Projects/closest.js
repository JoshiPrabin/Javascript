function findClosestTo(arr, num) {
  let closest = 1000;
  arr = arr.reverse();
  console.log(arr);
  for (elem in arr) {
    if (Math.abs(arr[elem] - num) < closest) {
      closest = arr[elem];
    }
  }
  console.log(arr.length - 1 - arr.indexOf(closest));
  return closest;
}

console.log(findClosestTo([0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100], 0.5));
