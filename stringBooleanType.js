//String data type - represents textual data
var str1 = "Hello, TypeScript!";
var str2 = "Ritesh Yadav";
console.log(str1 + " I am " + str2);
var conNum = 42;
var conNumStr = conNum.toString();
var conNumStr2 = " " + conNum; //concatenation
console.log("Converted number to string: " + conNumStr);
console.log("Converted number to string using concatenation: " + conNumStr2);
var boolData = true;
var boolDataStr = boolData.toString();
console.log("Converted boolean to string: " + boolDataStr);
var info = "My Name is ".concat(str2, " and the answer to everything is ").concat(str1, " and I am absoultely ").concat(boolData);
console.log(info);
//Boolean data type - represents logical values--------------------------------------------
var bool1;
bool1 = true;
console.log("Boolean value: " + bool1);
bool1 = false;
console.log("Boolean value: " + bool1);
//Possible values for the boolean type are true and false only
