function rot13(str) {
    const original = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return str.replace(/[a-z]/gi, letter => cipher[original.indexOf(letter)]);
  }
  
console.log(rot13("SERR PBQR PNZC"));
