// Making the first letter of each word in a sentence capital.

function titleCase(str) {
    let arr = str.split("");
    let newStr = "";
    newStr = newStr + arr[0].toUpperCase();
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] == " "){
            newStr += arr[i+1].toUpperCase();
        }
        else{
            newStr += arr[i+1];
        }
    }
    return newStr;
  }
  
console.log(titleCase("I'm a little tea pot"));