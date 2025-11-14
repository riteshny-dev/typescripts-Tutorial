// Special type - Data Types

//any - can hold any type of value

var randomValue: any = 10;
console.log("Random Value (number):", randomValue);

var randomValue2: any = true;
console.log("Random Value (boolean):", randomValue2);

//unkown - similar to any but safer

var unknownValue: unknown = "Hello World";
console.log("Unknown Value (string):", unknownValue);

unknownValue = 42;
console.log("Unknown Value (number):", unknownValue);

//void - repesents absence of any type, usually for functions that do not return a value

function logMessage(message: string): void {
  console.log("Log Message:", message);
}

//never - represents values that never occur, usually for functions that always throw an error or never return

function thhrowError(message: string): never {
  throw new Error(message);
}

// Uncommenting the following line will throw an error
