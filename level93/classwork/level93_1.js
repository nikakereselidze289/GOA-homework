let strNum1 = prompt("Enter the first decimal number (e.g., 12.5):");
let strNum2 = prompt("Enter the second decimal number (e.g., 7.9):");
let intSum = parseInt(strNum1) + parseInt(strNum2);
console.log("Sum using parseInt():", intSum);
let floatSum = parseFloat(strNum1) + parseFloat(strNum2);
console.log("Sum using parseFloat():", floatSum);

if (intSum === floatSum) {
  console.log("The sums are strictly equal (===).");
} else {
  console.log("The sums are NOT strictly equal (===).");
}
