const text = "Hi, How are you?"
//Upper & Lower case converter
const capitalWord = text.toUpperCase();
const smallWord = text.toLowerCase();
console.log(capitalWord);
console.log(smallWord);
//Replace any string
const newText = text.replace("How","You");
console.log(newText)
//string length
console.log(text.length);
//string slice positive & negative value
const result1 = text.slice(4,7);
console.log(result1);
const result2 = text.slice(-8,-4);
console.log(result2);
