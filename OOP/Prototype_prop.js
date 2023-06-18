function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs  = 4; // numLegs will be shared among the created objects and duplicate code will be reduced.
  
  let beagle = new Dog("Snoopy");
  console.log(beagle);