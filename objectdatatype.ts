// Object Data Types

//array - collection of similar data types

var arr1 = [1, 2, 3, 4, 5];
var ar2: number[] = [6, 7, 8, 9, 10];
var arr3: Array<number> = [11, 12, 13, 14, 15];
var arr4: Array<string> = ["a", "b", "c", "d", "e"];
var arr5: Array<symbol> = [Symbol("1"), Symbol("2"), Symbol("3")];
var arr6: Array<any> = [1, "two", true, { key: "value" }, [5, 6, 7]];

console.log(arr1);
console.log(ar2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

//tuple - collection of different data types

var tuple1: [number, string] = [1, "one"];
var tuple2: [boolean, number, string] = [true, 1, "two"];

console.log(tuple1);
console.log(tuple2);

//object - collection of key-value pairs
var object1: { name1: string; age1: number; isStudent1: boolean } = {
  name1: "Alice",
  age1: 20,
  isStudent1: true,
};
var object2: { project: any; year: number } = {
  project: "TypeScript",
  year: 2024,
};
console.log(object1);
console.log(object2);
