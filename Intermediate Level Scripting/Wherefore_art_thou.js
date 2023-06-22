function whatIsInAName(collection, source) {
  sourceKeys = Object.keys(source);
  return collection.filter(items => {
    for(let i = 0; i < sourceKeys.length; i++){
        if(items[sourceKeys[i]] !== source[sourceKeys[i]]){
            return false;
        }
    }
    return true;
})
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));