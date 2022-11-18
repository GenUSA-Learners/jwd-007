// Global Math object

let num1 = 10;
let num2 = 3;
let num3 = 45.6666668;

let numArray = [87, 5, 98, 22, 44.62, 12.25];

// Built-in Math methods

// RANDOM, FLOOR, CEIL
const random = Math.random() * num1;
const randomFloor = Math.floor(Math.random() * num1);

console.log(random); // Prints random number between 1 and *the value stored in the num1 variable*
console.log(Math.floor(random)); // Prints random number between 1 and *the value stored in the num1 variable* rounded down to the nearest whole number
console.log(randomFloor); // Also prints random number between 1 and *the value stored in the num1 variable* rounded down to the nearest whole number

console.log(Math.ceil(num3)); // 46
console.log(Math.floor(num3)); // 45

// MIN and MAX
console.log(Math.min(...numArray)); // 5
console.log(Math.max(...numArray)); // 98
console.log(Math.min(8, 4, 6, 2, -8, -1)); // -8
// If no arguments are given, the result is Infinity
console.log(Math.min()); // Infinity
// If at least one of the arguments cannot be converted to a number, the result is isNaN
console.log(Math.min(8, 4, 6, 2, -8, 'a')); // NaN

// POW
// Returns Returns base num1 to the exponent power num2 (that is, num1 to the num2 power).
console.log(Math.pow(num1, num2)); // 1000
