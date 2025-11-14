//String data type - represents textual data

var str1: string = "Hello, TypeScript!";
var str2 = "Ritesh Yadav";

console.log(str1 + " I am " + str2);

var conNum: number = 42;

var conNumStr: string = conNum.toString();

var conNumStr2: string = " " + conNum; //concatenation

console.log("Converted number to string: " + conNumStr);

console.log("Converted number to string using concatenation: " + conNumStr2);

var boolData: boolean = true;

var boolDataStr: string = boolData.toString();

console.log("Converted boolean to string: " + boolDataStr);

var info: string = `My Name is ${str2} and the answer to everything is ${str1} and I am absoultely ${boolData}`;

console.log(info);

//Boolean data type - represents logical values--------------------------------------------

var bool1: boolean;

bool1 = true;

console.log("Boolean value: " + bool1);

bool1 = false;

console.log("Boolean value: " + bool1);

//Possible values for the boolean type are true and false only
