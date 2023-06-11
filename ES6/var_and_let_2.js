// The solution is to ude the let keyword to declare variables.
// Declaring varibales with the let keywork will allow them to be local if declared within a function and global if outside.

function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

  checkScope();