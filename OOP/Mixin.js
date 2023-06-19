// For unrelated objects like Bird and Aiplane ( Both can fly() ), it is better to use mixins.

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  let glideMixin = function(obj){
    obj.glide = function(){
      return "Gliding";
    }
  }
  
  glideMixin(bird);
  glideMixin(boat);

  console.log(bird.glide());
  console.log(boat.glide());