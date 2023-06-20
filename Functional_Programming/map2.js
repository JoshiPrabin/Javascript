const testObj = [{
    name: "Prabin Joshi",
    height: 5.11
},{
    name: "Prashant Joshi",
    height: 5.12
}];

const newObj = testObj.map(item => ({
    name: item.name
}));

console.log(newObj);
console.log(testObj);