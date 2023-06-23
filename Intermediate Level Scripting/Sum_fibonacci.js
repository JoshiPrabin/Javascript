function sumFibs(num) {
    let a = 0;
  let b = 1;
  let sum = 0;
  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    b += a;
    a = b - a;
  }

  return sum;
  }
  
console.log(sumFibs(4));