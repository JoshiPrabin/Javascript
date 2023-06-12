let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; 
let result = ohStr.match(ohRegex);

console.log(result);