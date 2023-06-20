Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
      if(Boolean(callback(this[i], i, this)) === true){
        newArray.push(this[i]);
      }
    }
    return newArray;
  };

  const testArr = [1,2,3,4,5,6,7,8,9];

  const even = testArr.filter(item => item%2 == 0);
  console.log(even);