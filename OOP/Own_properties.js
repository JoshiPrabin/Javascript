/* name and numLegs are called own properties, because they are defined directly on the instance object.
 That means that canary has its own separate copy of these properties.
 In fact every instance of Bird will have its own copy of these properties */

 function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }

  console.log(ownProps);