let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Shows <h1> and not the string text
let result = text.match(myRegex);

console.log(result);