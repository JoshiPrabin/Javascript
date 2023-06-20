/* Don't alter a variable or object - create new variables
 and objects and return them if need be from a function.
  Hint: using something like const newArr = arrVar,
   where arrVar is an array will simply create a reference
    to the existing variable and not a copy.
     So changing a value in newArr would change the value in arrVar.

Declare function parameters -
 any computation inside a function depends only on the
  arguments passed to the function, and not on any global object or variable. */

// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add(list, bookName) {
  return [...list, bookName];
}

function remove(list, bookName) {
  return list.filter(book => book !== bookName);
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);