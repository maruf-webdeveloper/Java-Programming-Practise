let firstName = "John";
let lastName = "Doe";
let text =`The quick
brown fox
jumps over
the lazy dog`;
let text1 = `Welcome ${firstName}, ${lastName}!`;
console.log(text1);
console.log(text);
// practise
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(5)}`;
console.log(total);