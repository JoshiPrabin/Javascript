//The problem

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i); // the variable i should not be available for use here.
// But the output is [ 0, 1, 2 ] and 3. This might cause problems.