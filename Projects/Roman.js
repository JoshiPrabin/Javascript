function convertToRoman(num) {
    let numbers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let letters = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    let quotient;
    let str = "";
    let i = 0;
    while(num > 0){
        quotient = Math.floor(num/numbers[i]);
        num = num % numbers[i];
        while(quotient--){
            str += letters[i];
        }
        i++;
    }
    return str;
   }
   
console.log(convertToRoman(1));

