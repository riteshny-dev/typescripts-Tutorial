"use strict";
//Tuple - A tuple is a special type of array with fixed length and types for each index
Object.defineProperty(exports, "__esModule", { value: true });
var bikes = ["Yamaha", 2020, true];
bikes.push("Honda", 2022, true); //Allowed
bikes.push("tvs", 2021, false); // Allowed
//bikes.push(false); //Not Allowed
console.log(bikes);
var laptop = [
    "Dell",
    2021,
    true,
];
laptop.push("Dell", 2021);
laptop.push("HP", 2022, false); //Allowed
laptop.push({ nameA: "Asus" }); //Allowed
console.log(laptop);
var soundSystem = ["Bose", 100, 200, 300];
soundSystem.push(400, 500); //Allowed
soundSystem.push("Sony", 102); //Allowed
//soundSystem.push(true); //Not Allowed
console.log(soundSystem);
// Returning tuple from function
function getUserData() {
    return ["Alice", 30];
}
var getUserData1 = getUserData();
console.log(getUserData1);
function findElement([locator, value]) {
    console.log(`Finding element with ${locator}: ${value}`);
}
findElement(["id", "submit-button"]);
//# sourceMappingURL=tuple.js.map