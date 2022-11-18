// Global Number object

let myNumber = 30;

// methods
console.log(Number.isNaN(myNumber)); // Prints false
console.log(Number.isFinite(myNumber)); // Prints true
console.log(Number.isInteger(myNumber)); // Prints true

// properties
const biggestNum     = Number.MAX_VALUE
const smallestNum    = Number.MIN_VALUE
const infiniteNum    = Number.POSITIVE_INFINITY
const negInfiniteNum = Number.NEGATIVE_INFINITY
const notANum        = Number.NaN

console.log(biggestNum);
console.log(smallestNum);
console.log(infiniteNum);
console.log(negInfiniteNum);
console.log(notANum);

console.log(Number('123'));
console.log(Number('123') === 123);
console.log(Number('12.3'));
console.log(Number('12.00'));
console.log(Number('123e-1'));
console.log(Number(''));
console.log(Number(null));
console.log(Number('0x11'));
console.log(Number('0b11'));
console.log(Number('foo'));
