let string1 = "Hello";
let string2 = "World";

console.log(string1.concat(string2));

let str1 = "NIKA";
let str2 = "KERESELIDZE";
let str3 = "GOA STUDENT";

console.log(str1.concat(str2.str3));

let word1 = "Strawberry";
let word2 = "Raspberry";
let word3 = "Blueberry";

let result = word1.concat(" ", word2);
console.log(result);

let url = "";

console.log(url.endsWith("/"));

function endswith(word) {
  return word.endsWith("s");
}

console.log(endswith("apple"));
console.log(endswith("pears"));
console.log(endswith("grapes"));

function endwithPunctuation(sentence) {
  return (
    sentence.endsWith(".") || sentence.endsWith("?") || sentence.endsWith("!")
  );
}

console.log(endwithPunctuation("Hello world!"));
console.log(endwithPunctuation("How you are?"));
console.log(endwithPunctuation("This is me."));
