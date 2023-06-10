const object = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

function checkObj(obj, checkProp) {
    if(obj.hasOwnProperty(checkProp) == true){
      return obj[checkProp];
    }
    return "Not Found";
  }

console.log(checkObj(object,"hat"));
console.log(checkObj(object,"socks"));