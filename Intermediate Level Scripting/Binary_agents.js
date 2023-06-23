function binaryAgent(str) {
    var binary = str.split(" ");
    var sentence = [];
    for (let i = 0; i < binary.length; i++) {
      sentence.push(String.fromCharCode(parseInt(binary[i], 2)));
    }
    return sentence.join("");
  }
  
  let str = "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";
  console.log(binaryAgent(str));