function Dog(name) {
    this.name = name;
  }
  
Dog.prototype = {
    numLegs: 4,
    eat: function(){return "Eating."},
    describe: function(){return "I am a cute puppy."}
  };

  let husky = new Dog("Doggo");
  console.log(husky);