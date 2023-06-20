Array.prototype.myMap = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
      newArray.push(callback(this[i],i,this));
    }
    return newArray;
  };

const testObj = [{
    name: "Prabin Joshi",
    height: 5.11
},{
    name: "Prashant Joshi",
    height: 5.12
}];

const newObj = testObj.myMap(item => ({
    name: item.name
}));

console.log(newObj);
console.log(testObj);