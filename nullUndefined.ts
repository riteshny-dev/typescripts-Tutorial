//null data type - Null represents the value is explicitly empty by developer
// Explicitly clear or reset a variable
var myVar: null = null;
// myVar = "Now I have a value"; This will give erroe because null type variable can only hold null value
console.log(myVar);
// Null with the string is not allowed

var episode1: null | String = null;
// episode1 = "Dawn of the Planet of the Apes"; // This is allowed
console.log(episode1);

episode1 = "Dawn of the Planet of the Apes";
console.log(episode1);

//Null with the number type

var score: null | number = null;
console.log(score);

score = 42;
console.log(score);

//undefined data type - Undefined represents a variable that has been declared but not assigned a value

var myVar2;
console.log(myVar2); // Output: undefined

myVar2 = 100;
console.log(myVar2); // Output: 100

//Uninitialized variable

var level: undefined | number;

console.log(level); // Output: undefined

level = 5;

console.log(level); // Output: 5

//Missing function arguments

//Missing object properties

const user1 = {
  name: "Alice",
  age: 30,
};

// console.log(user1.address); // Output: undefined

// console.log(user1);

//Optional properties in interfaces

interface user2 {
  name: string;
  age: number;
  address?: string; // Optional property
}

const user3: user2 = {
  name: "Bob",
  age: 25,
};

console.log(user3.address); // Output: undefined

console.log(user3);

//optional function parameters

function greetss(name: string, greeting?: string): void {
  if (greeting) {
    console.log(`${greeting}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}
greetss("Charlie"); // Output: Hello, Charlie!
greetss("Dave", "Good morning"); // Output: Good morning, Dave!
