let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;  // spaces are also matched
let result = quoteSample.match(myRegex); 

console.log(result);