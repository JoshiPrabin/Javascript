const UNITS = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000],
];

function checkCashRegister(price, cash, cid) {
  let status;
  let due = Math.round(cash * 100 - price * 100);
  const total = cid.reduce((total, [, amount]) => total + amount, 0) * 100;
  let change;
  if (due === total) {
    status = "CLOSED";
    change = cid;
  } else if (due > total) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  let indexOfClosest;
  function findClosestTo(arr, num) {
    let closest = 1000;
    arr = arr.reverse();
    for (elem in arr) {
      if (Math.abs(arr[elem] - num) < closest) {
        closest = arr[elem];
      }
    }
    indexOfClosest = arr.length - 1 - arr.indexOf(closest);
    return indexOfClosest;
  }
  let arrOfDollars = [];
  UNITS.forEach((element) => {
    arrOfDollars.push(element[1]);
  });
  indexOfClosest = findClosestTo(arrOfDollars, due);
  if (cid[indexOfClosest][1] > due / 100) {
    status = "OPEN";
    change = [[cid[indexOfClosest][0], due / 100]];
  }
  //   console.log(indexOfClosest);
  return { status, change };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
