function palindrome(str) {
    function notAlphanumeric(str){
        return /\W|_/.test(str);
    }
    str = str.toLowerCase().split("").filter(items => !notAlphanumeric(items)).join("");
    let newStr = str;
    let revStr = newStr.split("").reverse().join("");
    if(str === revStr){
        return true;
    }
    return false;
}

console.log(palindrome("A man, a plan, a canal. Panama"));