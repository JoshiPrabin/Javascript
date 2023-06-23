function pairElement(str) {
    let newArr = str.split("");
    let arr = [];
    newArr.forEach(element => {
        switch(element){
            case('A'):
                arr.push(['A','T']);
                break;
            case('T'):
                arr.push(['T','A']);
                break;
            case('G'):
                arr.push(['G','C']);
                break;
            case('C'):
                arr.push(['C','G']);
                break;
        }
    });
    return arr;
  }
  
console.log(pairElement("GCG"));