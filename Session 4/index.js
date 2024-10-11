// ARRAY
let grade = 80;
console.log(grade);

let gradeArray = [80,91,92,93,65];
console.log(gradeArray);

let mixArray = [8, 'John', 16, true, null, [1, 2, 3, 4]];
console.log(mixArray);

let myArray = [];

myArray.push('John');
myArray.push('Rein');

console.log(myArray);

let students = ['Peter', 'Jane', 'Bob'];
console.log (students[0]);
console.log (students[2]);

students[0] = 'John Mark';
console.log(students);

students.push('Aldyne', 'Rency', 'Kristenz', 'Carl');
console.log(students);

students[students.length - 1] = 'Robert Pogi';
console.log(students)

for(let x = 0; x < students.length; x++) {
    console.log(students[x]);
}

let friends = [];

function showFriends(){
    console.log(friends);
}

function addFriend(name){

    for(let x = 0; x <= friends.length; x++){
        if (friends[x] == name.toUpperCase()){
            console.log('You are already friends with '+ name);
            break
        }else{  
            friends[friends.length] = name.toUpperCase();
            console.log('Friend request sent to ' + name);
            break
        }
    }
}


addFriend('John Mark');
showFriends();
addFriend('John Mark');
showFriends();