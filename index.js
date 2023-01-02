const userName = prompt('Enter your name:')

// alert(`Hello, ${userName}! How are you?`)

// console.log(userName);

if(userName) {
    alert(`Hello, ${userName}! How are you?`)
} else {
    console.error('Enter your name pls!');
}

