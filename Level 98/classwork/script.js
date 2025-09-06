// From an array of 10 strings, determine if any string has more than 10 characters.
function hasLongString(arr) {
  return arr.some((str) => typeof str === "string" && str.length > 10);
}

// Print each element of 5 Numbers array along with its index:
// // "Index: X, Value: Y"
const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

// Uppercase Strings
// Convert all strings in an array to uppercase.
function toUppercaseArray(arr) {
  return arr.map((str) => str.toUpperCase());
}
