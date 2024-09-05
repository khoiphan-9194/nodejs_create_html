// TODO: Import `maths.js`

const maths = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`


/*
module.exports = {
  sum: (a, b) => a + b,
  difference: (a, b) => a - b,
  product: (a, b) => a * b,
  quotient: (a, b) => a / b,
};

*/

let value =process.argv[2];
let var1 = parseInt(process.argv[3]); 
let var2 = parseInt(process.argv[4]);
let result;

switch(value)
{
    case "sum":  result = maths.sum(var1,var2)
    console.log(result);
    break;
    case "difference": result = maths.difference(var1,var2)
    console.log(result);
    break;
    case "product": result = maths.product(var1,var2)
    console.log(result);
    break;
    case "quotient": result = maths.quotient(var1,var2)
    console.log(result);
    break;
    default:
        break;
        

}



 //   console.log(process.argv[2]);