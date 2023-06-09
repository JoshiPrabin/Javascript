// The strict equality operator does not perform type conversion 
// 3 === 3 is true
// 3 === '3' is false while 3 == '3' is true

let val;

function check(val){
    if(val === 3){
        return "True";
    }
    else{
        return "False";
    }
}

console.log(check(3));