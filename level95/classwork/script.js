const str = "banana";

const firstIndexOfA = str.indexOf("a");
console.log("First occurrence of 'a':", firstIndexOfA);

const secondIndexOfA = str.indexOf("a", firstIndexOfA + 1);
console.log("Second occurrence of 'a':", secondIndexOfA);

const sentence = "Hello world";

const indexOfWorld = sentence.indexOf("world");
console.log("Index of 'world':", indexOfWorld);
