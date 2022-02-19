// =========== Descrinminated unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
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

// ================== Type casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}



// ================== Index properties
interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character!'
};


// =================== Function overloads
type Combinable = string | number
type Numeric = number | boolean
type Unbiversal = Combinable & Numeric

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}
const result = add(1, 2)
const result2 = add('1', '2')
result2.split('')


// ================ Optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Max',
  // job: { title: "CEO", desription: "My own company" }
}
// console.log(fetchedUserData?.job?.title)



// =========== Nulish coaleshcin

const userType = ''
const store = userType ?? "DEFAULT"
console.log(store)