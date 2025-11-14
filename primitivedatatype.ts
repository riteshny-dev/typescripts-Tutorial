//Primitive Data Types

//Number - integer and floating-point numbers
var a = 10;
var b: number = 20;
console.log(a + b);

//String - sequence of characters

var student1 = "John";
var student2: string = "Doe";

console.log("Studemt 1:", student1);
console.log("Student 2:", student2);

//boolean - true or false
var isSelcted = true;
var isPassed: boolean = false;

console.log("Is Selected:", isSelcted);
console.log("Is Passed:", isPassed);

//null  - absence of any value

var n = null;
var m: null = null;

console.log("Null values:", n);
console.log("Null values:", m);

//Undefined - variable declared but not assigned a value

var u = undefined;
var v: undefined = undefined;

console.log("Undefined values:", u);
console.log("Undefined values:", v);

//BigInt - for large integers

var big1 = BigInt(9007199254741991);
var big2: BigInt = BigInt(9007199254741992);

console.log("BigInt 1:", big1);
console.log("BigInt 2:", big2);

//Symbol - unique and immutable identifier

var sym1 = Symbol("user ID");

var sym2: symbol = Symbol("user ID");

console.log("Symbol 1:", sym1);
console.log("Symbol 2:", sym2);
