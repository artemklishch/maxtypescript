"use strict";
var e1 = {
    name: "Bob",
    privilegies: ["tom"],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add(1, 2);
function printEmployeeInformation(empl) {
    console.log("Name " + empl.name);
    if ('privilegies' in empl) {
        console.log('Priveleges ' + empl.privilegies);
    }
    if ('startDate' in empl) {
        console.log('Start date ' + empl.startDate);
    }
}
printEmployeeInformation(e1);
var Car = (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo ...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
//# sourceMappingURL=app.js.map