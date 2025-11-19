"use strict";
//array data type in TypeScript - Allows you to store the multiple values of same type in a single variable.
Object.defineProperty(exports, "__esModule", { value: true });
var fruits = ["Apple", "Banana", "Mango"]; //string array
var ageLimit = [18, 21, 25, 30]; //number array
var isAdmin = [true, false, true]; //boolean array
var tvModels = ["LG", "Samsung", "Sony"]; //generic array syntax
var mobilePhones = [
    "iPhone",
    12345,
    true,
    undefined,
    null,
]; //mixed array syntax (string, number, boolean, undefined, null
var anyArray = ["Hello", 100, false, { name: "John" }, [1, 2, 3]]; //array of any type
var num1 = [1, 2, 3, 4, 5]; //readonly array
// num1.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
]; //array of objects
var colors = ["Red", 255, true]; //tuple array
// colors = [255,"Red",true]; // Error: Type 'number' is not assignable to type 'string'.
var days = ["Monday", 2, "Wednesday", 4]; //array with union types
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
//# sourceMappingURL=array.js.map