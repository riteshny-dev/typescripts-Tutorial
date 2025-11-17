//bigInt data type used to store large integer values beyond the safe integer limit of Number type in JavaScript/TypeScript.

var bigIntValue: bigint = 9007199254741991n; // 'n' suffix denotes a BigInt literal

var intValue2: bigint = 42n; // Another BigInt value

var sum: bigint = 1n; // BigInt addition

console.log("BigInt Value: " + bigIntValue + intValue2 + sum);

//BigInt can also be created using the BigInt constructor
