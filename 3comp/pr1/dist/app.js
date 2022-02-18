"use strict";
var userName = "Bob";
console.log('userName', userName);
var age;
age = 5;
var btn = document.querySelector('button');
var appId = 'id';
var clickHandler = function (message) {
    console.log('Clicked ' + message);
};
btn.addEventListener('click', clickHandler.bind(null, "Hello"));
function add(n1, n2) {
    if ((n1 + n2) > 0) {
        return n1 + n2;
    }
    return;
}
//# sourceMappingURL=app.js.map