function mySum(a, b) {

    return a + b;
  
}

function myDiv (a, b){
    if(b === 0)
        return false; 
    return a / b;
  
  }

function containsNumbers(text){

    for (let i = 0; i < text.length; i++) {

        if (!isNaN(text.charAt(i)))
            return true;

    }

    return false;

}
  
exports.mySum = mySum;
exports.myDiv = myDiv;
exports.containsNumbers = containsNumbers;