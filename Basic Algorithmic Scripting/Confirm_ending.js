function confirmEnding(str, target) {
    let strLen = str.length;
    let tarLen = target.length;
    return str.slice(strLen - tarLen) == target;
}
  
console.log(confirmEnding("Bastian", "n"));