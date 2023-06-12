let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; //i flag for ignore casing and g for a global search(not just the first one)
let result = twinkleStar.match(starRegex); 
console.log(result);