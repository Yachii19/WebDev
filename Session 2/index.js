// Selection Control Structure
// 1. if-else
// 2. switch-case

let meBeTheOne = prompt('Enter your name: ');

console.log(`Hello, ${meBeTheOne}!`);

let number = Number(prompt('Enter your age: '));
console.log(typeof number);

if(number >= 0 && number <= 2) {
    console.log(number + ' is equal to being a toddlder');
}else if(number >= 3 && number <= 11) {
    console.log(number + ' is equal to childhood');
}else if(number >= 12 && number <= 19) {
    console.log(number + ' is equal to being a teenager');
}else if(number >= 20 && number <= 64) {
    console.log(number + ' is equal to bein an adult.');
}else {
    console.log(number + ' is equal to late adulthood');
}

// Switch-Case Statement 
let day = prompt('Enter a day: ');
console.log(day.toLowerCase());

switch(day.toLowerCase()) {
    case 'monday':
        console.log('The color of the day is red.')
        break;
    case 'tuesday':
        console.log('The color of the day is orange.')
        break;
    case 'wedneday':
        console.log('The color of the day is yellow.')
        break;
    case 'thursday':
        console.log('The color of the day is green.')
        break;
    case 'friday':
        console.log('The color of the day is blue.')
        break;
    case 'saturday':
        console.log('The color of the day is indigo.')
        break;
    case 'sunday':
        console.log('The color of the day is violet.')
        break;

    default:
        console.log('Please enter a correct day.')
        break;
}