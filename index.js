// first part of home work 7

for (let halfOfNum = 20; halfOfNum <= 30; halfOfNum += 0.5) {
    console.log(halfOfNum);
    continue;
};

// second part of home work 7

for (let priceOfDollar = 10; priceOfDollar <= 100; priceOfDollar++) {
    if (priceOfDollar % 10 == 0) {
        console.log(priceOfDollar * 27);
    }
};

// third part of home work 7 

let primeNumb = 79;

for (let i = 0; i <= 100 ; i++) {
  let multiplyNum = i * i;
  if (multiplyNum <= primeNumb) {
    console.log(multiplyNum);
    continue;
  }
};
    
// forth part of home work 7

nextPrime: 
for (let primeNum = 2; primeNum < 20; primeNum++) {

  for (let justNum = 2; justNum < primeNum; justNum++) {
    if (primeNum % justNum == 0) 
    continue nextPrime;
  }
  console.log(primeNum);
}; 

// fifth part of home work 7 

let numReduc = +prompt('Type a number which reduction to degree of number 3 ?');
let result = 1;
for (let counter = 0; counter < 4; counter += 1) {
  result *= 3;
  if (result % numReduc === 0){
    alert(numReduc + ' - reductions to degree of number 3, great!');
    break;
  } else {
    alert(numReduc + ' - not reductions to degree of number 3, please type a right number!');
    break;
  };
};

