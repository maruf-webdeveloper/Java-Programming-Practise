const text = "The rain in SPAIN stays mainly in the plain";
const index = text.indexOf("rain");
const textMatch = text.match(/ain/gi);
console.log(textMatch);
console.log(index);
