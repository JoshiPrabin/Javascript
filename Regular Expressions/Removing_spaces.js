let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/; 
let result = hello.replace(wsRegex,""); 

console.log(result);