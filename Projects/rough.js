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
  const total = cid.reduce((total, [, amount]) => total + amount * 100, 0);
  let change = [];

  if (due === total) {
    status = "CLOSED";
    change = cid;
  } else if (due > total) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else {
    for (let i = UNITS.length - 1; i >= 0; ) {
      const [moneyInWord, moneyValue] = UNITS[i];
      const moneyInDrawer = Math.ceil(cid[i][1] * 100);

      if (due >= moneyValue) {
        console.log(moneyValue, moneyInDrawer);
        const maxUnits = Math.floor(moneyInDrawer / moneyValue);
        console.log(maxUnits); //maxUnits = 3
        const unitsToReturn = Math.min(maxUnits, Math.floor(due / moneyValue));
        console.log(unitsToReturn);
        const returnedValue = unitsToReturn * moneyValue;

        // console.log(returnedValue);

        change.push([moneyInWord, returnedValue / 100]);
        due -= returnedValue;
        due = Math.round(due * 100) / 100;
      }
      i--;
    }

    if (due === 0) {
      status = "OPEN";
    } else {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    }
  }

  return { status, change };
}

console.log(
  checkCashRegister(3.26, 100, [
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
