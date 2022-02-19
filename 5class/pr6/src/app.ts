type Person1 = {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
};

user1.greet('Hi there - I am');

// =====================

// interface LastNamed {
//   lastname: string
// }

// interface Greatable {
//   readonly name: string;

//   greet(phrase: string): void;
// }

// class Person2 implements Greatable, LastNamed {
//   name: string;
//   lastname: string
//   age = 30
//   constructor(n: string, ln: string) {
//     this.name = n
//     this.lastname = ln
//   }
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// }

interface LastNamed {
  lastname?: string;
  nickName?: string
}

interface Greatable extends LastNamed {
  readonly name: string;

  greet(phrase: string): void;
}

class Person2 implements Greatable {
  name: string;
  lastname?: string
  age = 30
  constructor(n: string, ln?: string) {
    this.name = n
    if (ln) {
      this.lastname = ln
    }
  }
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user2: Greatable;

user2 = new Person2("Max", "Ooops")
let user3: Greatable = new Person2("Max2")
user2.greet('Hi there - I am111');

// ===========

// type AddFn = (n1: number, n2: number) => number
interface AddFn {
  (a: number, b: number): number
}
let add: AddFn
add = (a: number, b: number) => a + b