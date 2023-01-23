
// 1 part of HW 8

let arrPartOne = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 
let arrEquel = arrPartOne.filter((el) => { 
  let counter = 0; 
  while (counter < arrPartOne.length){ 
        counter++; 
    if (el > 0){ 
      return el; 
    } 
    } 
    }); 
let arraySum = arrEquel.reduce((accum, el) => accum + el, 0); 
 
console.log(arraySum);
console.log(arrEquel.length);

// 2 part of HW 8

let arrPartTwo = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 
let minNum = arrPartTwo[0];
 
for (let i = 0; i < arrPartTwo.length; i++) { 
  if (minNum > arrPartTwo[i]) { 
    minNum = arrPartTwo[i]; 
  } 
} 
 
console.log(minNum);
console.log(arrPartTwo.indexOf(minNum));

// 3 part of HW 8

let arrPartThree = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let minNumber = arrPartThree[0];
 
 arrPartThree.forEach((el) => { 
  if (minNumber < el) { 
    minNumber = el; 
  } 
});
 
console.log(minNumber);
console.log(arrPartThree.indexOf(minNumber));

// 4 part of HW 8

let arrPartFour = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
 
let minNumb = [];
 
for (let i = 0; i < arrPartFour.length; i++) { 
  if (arrPartFour[i] < 0) { 
    minNumb.push(arrPartFour[i]);
  } 
} 
 
console.log(minNumb.length);

// 5 part of HW 8

let arrPartFive = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];  
 
let arrPair = arrPartFive.filter((el, i, arrNew) => {  
  if (el > 0) {  
    return arrNew.indexOf(el) !== i;   
  }  
});  
 
let arrUnPaired = arrPartFive.filter((el) => {  
  if (el > 0) {  
     return arrPair.indexOf(el) < 0;  
  }  
}); 
 
console.log(arrUnPaired.length);

// 6 part of HW 8

let arrPartSix = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

 
let pairPosEl = arrPartSix.filter((el, i, arrNew) => { 
  if (el > 0) {
      return arrNew.indexOf(el) !== i;
  }
});
 
console.log(pairPosEl.length);

// 7 part of HW 8

let arrPartSeven = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let pairPosElm = arrPartSeven.filter((el, i, arrNew) => { 
  
  if (el > 0) {
      return arrNew.indexOf(el) !== i;
  } 
});

let unPairPosEl = pairPosElm.filter((el, i, arrNew2) => { 
  
  if (el > 0) {
      return arrNew2.indexOf(el) === i;
  }
});

let pairPosElCount = [];

arrPartSeven.forEach((el) => {
  unPairPosEl.forEach((el2) => {
    if (el === el2) {
    pairPosElCount.push(el)
    }
  })
})

let arrSum = pairPosElCount.reduce((accum, el) => accum + el, 0); 

console.log(arrSum);

// 8 part of HW 8


let arrPartEight = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];  
 
let arrPairNum = arrPartEight.filter((el, i, arrNew) => {  
  if (el > 0) {  
    return arrNew.indexOf(el) !== i;   
  } 
}); 
 
 
let arrUnPair = arrPartEight.filter((el) => { 
  if (el > 0) {  
    return arrPairNum.indexOf(el) < 0;   
  }  
}); 
 
let arrSumma = arrUnPair.reduce((accum, el) => accum + el, 0);  
 
console.log(arrSumma);

// 9 part of HW 8

let arrPartNine = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 
let arrEquals = arrPartNine.filter((el) => { 
  let counter = 0; 
  while (counter < arrPartNine.length){ 
    counter++; 
    if (el > 0){ 
      return el; 
    } 
  } 
}); 

let arrSumm = arrEquals.reduce((accum, el) => accum * el, 1); 
 
console.log(arrSumm);

// 10 part of HW 8


let arrPartTen = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 

let maxNumb = arrPartTen[0]; 
 
for (let i = 0; i < arrPartTen.length; i++) { 
  if (maxNumb < arrPartTen[i]) { 
    maxNumb = arrPartTen[i]; 
  };
}; 

let arrDelElse = arrPartTen.map((el) => {
  
  if (el === maxNumb) {
    return el;
  };
});

console.log(arrDelElse);

