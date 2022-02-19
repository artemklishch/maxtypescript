"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["sport"] }, { age: 30 });
const mergedObj2 = merge({ name: "Bob" }, { age: 30 });
console.log(mergedObj.name);
function countAndDescribe(element) {
    let description = 'Got no value!';
    if (element.length === 1) {
        description = 'Got 1 element.';
    }
    else if (element.length > 0) {
        description = 'Got ' + element.length + " element.";
    }
    return [element, description];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe("Hi there"));
function ectractAndConvert(obj, key) {
    return "Value " + obj[key];
}
ectractAndConvert({ name: "Bob" }, 'name');
//# sourceMappingURL=app.js.map