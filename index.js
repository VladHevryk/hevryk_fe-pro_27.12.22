const userName = prompt('Enter your name:');
const userAge = +prompt('How old are you ?');
const drive = confirm('Are you drive a car ?');

if(userAge > 18) {
    console.log(userAge);
} else if(drive < true) {
    console.log(drive);
} else {
    alert('You drive with parents?');
} 

if(userAge > 18) {
    console.log(userAge);
} else if(drive > false) {
    console.log(drive); 
} else {
    alert('You are a law abiding citizen!');
} 

if(userAge < 18) {
    console.log(userAge);
} else if(drive > false) {
    console.log(drive);
} else {
    alert('You like walking ?)');
} 

if(userAge < 18) {
    console.log(userAge);
} else if(drive < true) {
    console.log(drive);
} else {
    alert('Have a good drive!');
} 