function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  let myHouse = new House(6);
  console.log(myHouse instanceof House); //returns true