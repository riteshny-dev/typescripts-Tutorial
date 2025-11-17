function getInfo() {
  const nameInput = document.getElementById("username") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const ageInput = document.getElementById("age") as HTMLInputElement;

  const uName: string = nameInput.value;
  const email: string = emailInput.value;
  const age: number = Number(ageInput.value);

  console.log(uName, email, age);
}
