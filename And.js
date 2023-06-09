let val;

function check(val){
    if(val >= 25 && val <=50){
        return "Greater or equal to 25 and less than or equal to 50";
    }
    else{
        return "No";
    }
}

console.log(check(26));