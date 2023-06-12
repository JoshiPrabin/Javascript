let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // shows 2 matches as it takes 'ss' as one.
let result = difficultSpelling.match(myRegex);

console.log(result);