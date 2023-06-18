function Animal() { }
// Animal is supertype
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 