let operation = prompt('Which operation do you need ?');
let result;

let numbFirst = +prompt('Type your first number please !');

if (isNaN(numbFirst) || numbFirst == '') {
    do {
    alert('Type a number please !');
    numbFirst = +prompt('Type your first number please !');
    } while (isNaN(numbFirst) || numbFirst == '');
};

let numbSecond = +prompt('Type your second number please !'); 

if (isNaN(numbSecond) || numbSecond == '') {
    do {
    alert('Type a number please !');
    numbSecond = +prompt('Type your second number please !'); 
    } while (isNaN(numbSecond ) || numbSecond == '');
};

switch(operation) {
    case 'plus':
    case '+':
        result = numbFirst + numbSecond;
        console.log(`${numbFirst} + ${numbSecond} = ${result}`);
        break;
    case 'minus':
    case '-':
        result = numbFirst - numbSecond;
        console.log(`${numbFirst} - ${numbSecond} = ${result}`);
        break;
    case 'multiply':
    case '*':
        result = numbFirst * numbSecond;
        console.log(`${numbFirst} * ${numbSecond} = ${result}`);
        break;
    case 'divide':
    case '/':
        result = numbFirst / numbSecond;
        console.log(`${numbFirst} / ${numbSecond} = ${result}`);
        break;
    default:
        console.log('Invalid operation');
        break;
};

alert(`Your result is - ${result}`);


