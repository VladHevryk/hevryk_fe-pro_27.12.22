let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
   
function generateKey(cicle, string) {
let randomString = ''; 
while (randomString.length < cicle) {
  randomString += string.charAt(Math.floor(Math.random() * string.length));
}
return randomString; 
}

console.log(generateKey(16, characters));
