//array declared with const is still mutable.

const s = [5, 6, 7];
//s = [1, 2, 3];   //throws an error
s[2] = 45;
console.log(s);