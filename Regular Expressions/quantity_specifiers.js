let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; 
let result = ohStr.match(ohRegex);

console.log(result);

// {3,} for  or more
//{,6} for 6 or less
//{3} for exactly three