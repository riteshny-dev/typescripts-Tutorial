// advance type - data types

//Union Types - Variables that can hold multiple types

var multiTypeVar: number | string = 100;
console.log("MultiTypeVar as number:", multiTypeVar);

multiTypeVar = "Now I'm a string";
console.log("MultiTypeVar as string:", multiTypeVar);

//Intersection Types - Variables that combine multiple types

var person: { name: string } & { age: number } = { name: "Alice", age: 25 };
console.log(person);

var employe: { id: number } & { position: string } & { department: string } = {
  id: 101,
  position: "Developer",
  department: "IT",
};
console.log(employe);

//Alias Types - Creating custom type names

var aliasType: string | number = "This is an alias type";
console.log("AliasType as string:", aliasType);

aliasType = 500;
console.log("AliasType as number:", aliasType);

//Literal Types - Variable that can hold only specific values

var LiteralType: "success" | "failure";
LiteralType = "success";
console.log("LiteralType:", LiteralType);

LiteralType = "failure";
console.log("LiteralType:", LiteralType);

//Enum Types - Defining a set of named constants

enum Color {
  Red,
  Green,
  Blue,
  Yellow,
}

console.log("Enum Color Red:", Color.Red);
console.log("Enum Color Green:", Color.Green);
console.log("Enum Color Blue:", Color.Blue);
console.log("Enum Color Yellow:", Color.Yellow);
