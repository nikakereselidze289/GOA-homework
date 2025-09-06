// 13. Check if array contains any positive numbers
function hasPositiveNumber(arr) {
  return arr.some((num) => num > 0);
}
console.log("Has positive number:", hasPositiveNumber([-1, -3, 5])); // true

// 14. Check if array contains at least one even number
function hasEvenNumber(arr) {
  return arr.some((num) => num % 2 === 0);
}
console.log("Has even number:", hasEvenNumber([1, 3, 7, 8])); // true

// 15. Check if any string has more than 5 characters
function hasLongString(arr) {
  return arr.some((str) => typeof str === "string" && str.length > 5);
}
console.log("Has long string:", hasLongString(["apple", "banana", "dog"])); // true

// 16. Check if array has any falsy value
function hasFalsyValue(arr) {
  return arr.some((val) => !val);
}
console.log("Has falsy value:", hasFalsyValue([1, 0, "hello", null])); // true

// 17. Check if array contains any prime numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function hasPrimeNumber(arr) {
  return arr.some(isPrime);
}
console.log("Has prime number:", hasPrimeNumber([4, 6, 8, 11])); // true

// 18. Print each element of an array
function printElements(arr) {
  arr.forEach((el) => console.log(el));
}
printElements(["apple", "banana", "cherry"]);

// 19. Print each element with its index
function printWithIndex(arr) {
  arr.forEach((val, idx) => {
    console.log(`Index: ${idx}, Value: ${val}`);
  });
}
printWithIndex([10, 20, 30]);

// 20. Calculate and print sum of numbers
function sumNumbers(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log("Sum:", sum);
}
sumNumbers([1, 2, 3, 4]); // 10

// 21. Print each string in uppercase
function printUppercase(arr) {
  arr.forEach((str) => console.log(str.toUpperCase()));
}
printUppercase(["hello", "world"]);

// 22. Print names from array of objects
function printNames(arr) {
  arr.forEach((obj) => console.log(obj.name));
}
printNames([{ name: "Alice" }, { name: "Bob" }]);

// 23. Return array of squared numbers
function squareNumbers(arr) {
  return arr.map((num) => num * num);
}
console.log("Squared:", squareNumbers([1, 2, 3, 4]));

// 24. Double each number in the array
function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
console.log("Doubled:", doubleNumbers([1, 2, 3]));

// 25. Convert all strings to uppercase
function toUppercaseArray(arr) {
  return arr.map((str) => str.toUpperCase());
}
console.log("Uppercase:", toUppercaseArray(["a", "b", "c"]));

// 26. Extract names from object array
function extractNames(arr) {
  return arr.map((obj) => obj.name);
}
console.log(
  "Names:",
  extractNames([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
  ])
);

// 27. Add 10 to each number in the array
function addTen(arr) {
  return arr.map((num) => num + 10);
}
console.log("Add 10:", addTen([5, 10, 15]));
