function Bird() {
    let weight = 15; // This is a private variable
    this.getWeight = function(){
      return weight;
    }
  }

let duck = new Bird();
console.log(duck.getWeight()); // getWeight can access weight because it is declared in the same scope