//Number Data Type in TypeScript in depth
var a = 10;
var b = 20;
var c = a + b;
console.log("The value of c is: " + c);
var a = 30;
//Redeclare will not possible using the let keyword
//let d: number = a + b; - This will show me an error due to compile is in watch
//console.log("The value of d is: " + d);
//Different ways to declare number datatype
var hexaDecimal = 0xf00d;
console.log("The value of hexaDecimal is: " + hexaDecimal);
var binary = 42;
console.log("The value of binary is: " + binary);
var octal = 484;
console.log("The value of octal is: " + octal);
//Type Conversion from string to number
var stringNumber = "1234";
var convertStringNumber = Number(stringNumber);
console.log("The value of convertStringNumber is: " + convertStringNumber);
var strNum2 = "8345648";
var strToNum2 = +strNum2; //Using + operator to convert string to number
console.log("The value of strToNum2 is: " + strToNum2);
//Type inference in number datatype - Automatically detect the data type
var infNumber = 5678; //TypeScript automatically detects this as number datatype
console.log("The value of infNumber is: " + infNumber);
