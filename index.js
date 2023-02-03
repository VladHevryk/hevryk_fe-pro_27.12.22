function degreeOfNumber(number, degree) {
    if(degree) {
     return number * degreeOfNumber(number, degree - 1);
    } else {
      return 1;
    }   
}
console.log(degreeOfNumber(2, 4));