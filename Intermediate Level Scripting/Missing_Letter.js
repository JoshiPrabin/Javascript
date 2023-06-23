function fearNotLetter(str) {
    let curr = str.charCodeAt(0);
    let missing;
    str.split("").forEach(element => {
        if(element.charCodeAt(0) === curr){
            curr++;
        }
        else{
            missing = String.fromCharCode(curr);
        }
    });
    return missing;
  }
  
console.log(fearNotLetter("abce"));