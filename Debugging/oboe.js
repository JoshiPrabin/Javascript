function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 1; i <= len; i++) {  // this will print 2 3 4 5 and undefined
      console.log(firstFive[i]);
    }
  }
  
  countToFive();