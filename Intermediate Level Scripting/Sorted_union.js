function uniteUnique(...arr) {
    let newArr = [];
    newArr = newArr.concat(arr);
    let concArr = [];
    newArr.forEach(element => {
        concArr = concArr.concat(element);
    });
    return concArr.filter((item,index,array) => array.indexOf(item) === index);
  }
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));