function testLogicalOr(val) {
    if (val <= 10 || val >=20) {
      return "Not between 10 and 20";
    }
  
    // Only change code above this line
    return "Between 10 and 20";
  }
  
  console.log(testLogicalOr(15));