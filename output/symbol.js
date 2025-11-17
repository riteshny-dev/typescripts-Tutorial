"use strict";
//symbol is data type that represnts unique value
Object.defineProperty(exports, "__esModule", { value: true });
let sym1 = Symbol("identifier");
let sym2 = Symbol("Unique identifier");
console.log(sym1 == sym2); // false because each symbol is unique
console.log(sym1);
console.log(sym2);
//# sourceMappingURL=symbol.js.map