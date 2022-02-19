// =========== Intersection types
type Admin = {
  name: string
  privilegies: string[]
}

type Employee = {
  name: string
  startDate: Date
}

type ElevfatedEmploee = Admin & Employee
const e1: ElevfatedEmploee = {
  name: "Bob",
  privilegies: ["tom"],
  startDate: new Date()
}

// interface Admin1 {
//   name: string
//   privilegies: string[]
// }

// interface Employee1 {
//   name: string
//   startDate: Date
// }
// interface ElevfatedEmploee1 extends Admin, Employee { }

// const e2: ElevfatedEmploee1 = {
//   name: "Bob",
//   privilegies: ["tom"],
//   startDate: new Date()
// }

type Combinable = string | number
type Numeric = number | boolean
type Unbiversal = Combinable & Numeric

// =============== Tyoe guards

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}


type UnknownEWmployee = Employee | Admin
function printEmployeeInformation(empl: UnknownEWmployee) {
  console.log("Name " + empl.name)
  if ('privilegies' in empl) {
    console.log('Priveleges ' + empl.privilegies)
  }
  if ('startDate' in empl) {
    console.log('Start date ' + empl.startDate)
  }
}
printEmployeeInformation(e1)


class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo ...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);