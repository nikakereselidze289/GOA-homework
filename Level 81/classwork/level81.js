function sumNumbers() {
  let total = 0;

  do {
    let userInput = prompt("Enter a number:");
    let number = parseFloat(userInput);

    if (isNaN(number)) {
      alert("Please enter a valid number.");
      continue;
    }

    total += number;
  } while (total <= 100);

  alert("The total exceeds 100. Final total: " + total);
}
