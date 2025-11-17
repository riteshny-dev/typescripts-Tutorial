"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const uName = nameInput.value;
    const email = emailInput.value;
    const age = Number(ageInput.value);
    console.log(uName, email, age);
}
//# sourceMappingURL=input.js.map