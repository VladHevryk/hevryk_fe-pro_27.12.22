
function sumOfNumber() { 
  let result = 0; 
  return function(number) {
    result += number; 
    return result;
 };   
}

let sumOfNumberResult = sumOfNumber();

console.log(sumOfNumberResult(3));
console.log(sumOfNumberResult(5));
console.log(sumOfNumberResult(20));