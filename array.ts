//array data type in TypeScript - Allows you to store the multiple values of same type in a single variable.

import type ts = require("typescript");

var fruits: string[] = ["Apple", "Banana", "Mango"]; //string array
var ageLimit: number[] = [18, 21, 25, 30]; //number array
var isAdmin: boolean[] = [true, false, true]; //boolean array

var tvModels: Array<string> = ["LG", "Samsung", "Sony"]; //generic array syntax

var mobilePhones: (string | number | boolean | undefined | null)[] = [
  "iPhone",
  12345,
  true,
  undefined,
  null,
]; //mixed array syntax (string, number, boolean, undefined, null

var anyArray: any[] = ["Hello", 100, false, { name: "John" }, [1, 2, 3]]; //array of any type

var num1: readonly number[] = [1, 2, 3, 4, 5]; //readonly array
// num1.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.

var users: Array<{ name: string; age: number }> = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
]; //array of objects

var colors: [string, number, boolean] = ["Red", 255, true]; //tuple array
// colors = [255,"Red",true]; // Error: Type 'number' is not assignable to type 'string'.

var days: (string | number)[] = ["Monday", 2, "Wednesday", 4]; //array with union types

console.log("Fruits:", fruits);
console.log("Age Limits:", ageLimit);
console.log("Is Admin:", isAdmin);
console.log("TV Models:", tvModels);
console.log("Mobile Phones:", mobilePhones);
console.log("Any Array:", anyArray);
console.log("Readonly Numbers:", num1);
console.log("Users:", users);
console.log("Colors Tuple:", colors);
console.log("Days with Union Types:", days);
// Output the arrays to the console
