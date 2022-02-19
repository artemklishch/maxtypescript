"use strict";
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('Moving at speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
var userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi there!';
}
var errorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add(1, 2);
var result2 = add('1', '2');
result2.split('');
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
};
var userType = '';
var store = userType !== null && userType !== void 0 ? userType : "DEFAULT";
console.log(store);
//# sourceMappingURL=app.js.map