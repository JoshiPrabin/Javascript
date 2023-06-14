let str = "This is a random string";
let regEx = /(\w+)\s(\w+)\s(\w+)\s(\w+)\s(\w+)/;
let result = str.replace(regEx , "$5 $4 $3 $2 $1");

console.log(result);