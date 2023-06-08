function myLocalScope() {
    // declared in local scope of the function myLocalScope
    let myVar = 5
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar);