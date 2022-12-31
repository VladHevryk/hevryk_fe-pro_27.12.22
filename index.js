const userName = prompt('Enter your name:');
const userAge = +prompt('How old are you ?');
const drive = confirm('Are you drive a car ?');

if(userAge < 18) {
    console.log(userAge);
if(drive) {
    alert(`${userName}, do your parents know?`);
} else {
    alert(`${userName}, you are a law abiding citizen!`);
}} else {
if(drive) {
    alert(`${userName}, have a good drive!`);
} else {
    alert(`${userName}, you like walking ?`);
    }
};
