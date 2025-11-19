//Tuple - A tuple is a special type of array with fixed length and types for each index

var bikes: [string, number, boolean] = ["Yamaha", 2020, true];
bikes.push("Honda", 2022, true); //Allowed
bikes.push("tvs", 2021, false); // Allowed
//bikes.push(false); //Not Allowed
console.log(bikes);

var laptop: [string, number, boolean?, { nameA: string }?] = [
  "Dell",
  2021,
  true,
];
laptop.push("Dell", 2021);

laptop.push("HP", 2022, false); //Allowed

laptop.push({ nameA: "Asus" }); //Allowed

console.log(laptop);

var soundSystem: [string, ...number[]] = ["Bose", 100, 200, 300];
soundSystem.push(400, 500); //Allowed
soundSystem.push("Sony", 102); //Allowed
//soundSystem.push(true); //Not Allowed
console.log(soundSystem);

// Returning tuple from function

function getUserData(): [string, number] {
  return ["Alice", 30];
}

var getUserData1 = getUserData();

console.log(getUserData1);

//Playwright tuple example

type LocatorTuple = [locator: string, value: string];

function findElement([locator, value]: LocatorTuple) {
  console.log(`Finding element with ${locator}: ${value}`);
}
