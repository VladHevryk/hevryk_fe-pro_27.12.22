// first part of home work 13

function arithmeticMeanOfNum(arr){
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
  if(typeof arr[i] === 'number'){
    newArray.push(arr[i]);
  } 
}
return newArray.reduce((accum,el) => accum+=el, 0)/newArray.length;
}

console.log(arithmeticMeanOfNum(['50', 'cent', 33, 'cows', 5, 'element']));


// second part of home work 13

function doMath(x, znak, y) {
  switch(znak){
  case '+':
    return `Your result is - ${x+y}`;
  case '-':
    return `Your result is - ${x-y}`;
  case '*':
    return `Your result is - ${x*y}`;
  case '/':
    return `Your result is - ${x/y}`;
  case '^':
    return `Your result is - ${x**y}`;
  default: 
    console.log('You put the unknown operations');
 }
}
 
let fistNumber = +prompt('Put the first number');
let znakOfFunc = prompt('Put the operations wich you want', '- , + , * , / , ^');
let secondNumber = +prompt('Put the first number');

console.log(doMath(fistNumber, znakOfFunc, secondNumber));

// third part of home work 13

function newArr (lengthOut, lengthIn, filling) {
  let array = new Array(lengthOut);
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(lengthIn).fill(filling);
    }
  return array;
}
let arrLengthOut = +prompt('Put the length of out array:');
let arrLengthIn = +prompt('Put the length og inner array:');
let arrFilling = prompt('Put the filling of array:');
console.log(newArr(arrLengthOut, arrLengthIn, arrFilling));

// forth part of home work 13

function deleteOfLetter() {
  let text = prompt('Put your text !');
  let letterDelete = prompt('Put the letter wich want to delete');
  let textArr = text.split('');
  let letterArr = letterDelete.split('');

  for(let i = 0; i < textArr.length; i++) {
    for(let n = 0; n < letterArr.length; n++) {
      if (textArr[i] === letterArr[n]) {
        textArr.splice(i, 1);
        i--;
      }
    }
  }
  return textArr.join('');
}

console.log(deleteOfLetter());