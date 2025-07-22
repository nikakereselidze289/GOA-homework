//  დავალება 1: ფუნქცია 10 არგუმენტით და ლუწი რიცხვების დაბეჭდვა
function printEvenNumbers(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  const args = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];

  console.log("ლუწი რიცხვები:");
  for (const num of args) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

printEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//  დავალება 2: function და arrow ფუნქცია
const sayHello = function () {
  console.log("hello from function keyword");
};

const sayHelloArrow = () => {
  console.log("hello from arrow function");
};

sayHello();
sayHelloArrow();

// კომენტარი:
// ორივე ფუნქცია არის ანონიმური, რადგან თავად ფუნქციის შიგნით სახელი არ აქვთ მინიჭებული.

//  დავალება 3: Immediately Invoked Function (IIFE)
const iifeResult = (function () {
  return "ეს არის IIFE ფუნქციის შედეგი!";
})();

console.log(iifeResult);

// Arrow IIFE ვერსია
console.log((() => "ეს არის IIFE arrow ფუნქცია!")());

//  დავალება 4: Block, Function, და Global scope მაგალითები

// Global scope
let globalVar = "მე ვარ გლობალური ცვლადი";

function myFunction() {
  // Function scope
  let functionVar = "მე ვარ ფუნქციის შიგნითა ცვლადი";
  console.log(globalVar); // ✓ მუშაობს
  console.log(functionVar); // ✓ მუშაობს
}

myFunction();

//  functionVar არ იმუშავებს აქ
// console.log(functionVar); // შეცდომა იქნება

if (true) {
  // Block scope
  let blockVar = "მე ვარ ბლოკის შიგნითა ცვლადი";
  console.log(blockVar); // ✓ მუშაობს
}

//  blockVar არ იმუშავებს აქ
// console.log(blockVar); // შეცდომა იქნება
