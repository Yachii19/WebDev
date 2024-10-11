// JS Objects and JSON

let personArray = ["John", 16, true];
console.log(personArray);

let personObjects = {
    name: 'John',
    age: 16,
    isRegistered: true
}

console.log(personObjects);

let student = {
    firstName: 'John',
    middleName: 'Smith',
    lastName: 'Doe',
    year: '3rd Year',
    section: 'A',
    address: {
        street: 'Magellan St.',
        houseNo: '750',
        brgy: 'Sacred Heart',
        city: 'Quezon City',
        province: 'Metro Manila',
        country: 'Philippines'
    },
    contact: [{
        phone: '0912456789',
        email: 'js@ua.edu.ph'
    }]
}

console.log(student);

// Accessing object properties value using dot notation

console.log(student.firstName); 
console.log(student.address.city);
console.log(student.contact[0].email);

// Object Constructor
// "this" and "new" keyword
// this keyword embraces the object property
// mew keyword pertains to the duplication of the constructor

function Pet(name, breed, age, color, type){
    this.name = name,
    this.breed = breed,
    this.age = age,
    this.color = color,
    this.animalType = type
    this.talk = function(){
        if (this.animalType === 'Dog'){
            console.log('Woof woof woof!')
        } else if (this.animalType === 'Bird'){
            console.log('Tweet Tweet!')
        }
    }
}

let bruno = new Pet('Bruno', 'Labrador', 5, 'brown', 'Dog');
console.log(bruno);

let lala = new Pet('Lala', 'Golden Retriever', 2, 'Golden Brown', 'Dog');
console.log(lala);

let rio = new Pet('Rio', 'Parrot', 1, 'red', 'Bird')
console.log(rio);

rio.animalType = 'Bird';
console.log(rio);

console.log(bruno.talk());
console.log(rio.talk());

// ES6 Updates
// Template Literal vs Concatenation

let name = 'Jane';
console.log('My name is ' + name);
console.log(`My name is ${name}!`);
console.log(`I have a pet named ${bruno.name} and he is ${bruno.age}.`)
