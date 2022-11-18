var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;


var expression1 = (b === e); // Evaluates to true
var expression2 = (e < d); // Evaluates to false

// Use comparison operators so all expressions below log to the console as true

console.log(a == b); // Strict equality (===) returns false; Equality returns true (==)
console.log(b === e); // b and e both hold number 50 and are strictly equal
console.log(c > b); // c is greater than b returns true
console.log(d === 0); // d is less than 1 returns true


// Use logical operators so all expressions below log to the console as true
console.log(expression1);
console.log(expression2);


console.log(expression1 || expression2); // Use || to return true
console.log(expression1 && !expression2); //Use ! and && to return true
console.log( expression1 || expression2); // Remove (!) from expression1 so one is true
