let userBirth = +prompt('Wich year were you birth ?');
let userAge = 2023 - userBirth;

if (userBirth) {
    alert(`Your age is - ${userAge} !`);
} else {
    alert('It is sad that you dont want to put your age ((')
};

let userCity = prompt('Where do you live ?');

if (userCity === 'London' || userCity === 'london' || userCity === 'Kiev' || userCity === 'kiev' || userCity === 'Paris' || userCity === 'paris') {
    alert(`Wow, ${userCity} is the Capital you are lucky !`);
} else if (userCity) {
    alert(`You live in a beautiful city - ${userCity} !`);
} else {
    alert('It is sad that you dont want to put your city ((');
}

let userSport = prompt('Which kind of sport do you prefer ?');
let sportStars;

if (userSport === 'race' || userSport === 'Race') {
    sportStars = 'Lucas Di Grassi';
} else if (userSport === 'football' || userSport === 'Football') {
    sportStars = 'Vittorio Pozzo';
} else if (userSport === 'basketball' || userSport === 'Basketball') {
    sportStars = 'Carlos Cabezas';
};

if (sportStars) {
    alert(`Cool you want be like ${sportStars} ?`);
} else if (userSport) {
    alert('Cool sport - is life !');
} else {
    alert('It is sad that you dont want to put your favourite sport ((');
};

