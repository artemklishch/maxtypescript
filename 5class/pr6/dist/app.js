"use strict";
var user1;
user1 = {
    name: 'Max',
    age: 30,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
var Person2 = (function () {
    function Person2(n, ln) {
        this.age = 30;
        this.name = n;
        if (ln) {
            this.lastname = ln;
        }
    }
    Person2.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person2;
}());
var user2;
user2 = new Person2("Max", "Ooops");
var user3 = new Person2("Max2");
user2.greet('Hi there - I am111');
var add;
add = function (a, b) { return a + b; };
//# sourceMappingURL=app.js.map