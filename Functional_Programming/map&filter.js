const squareList = arr => {
    return arr.filter(items => items > 0 && items%parseInt(items) === 0).map(square => Math.pow(square,2));
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);